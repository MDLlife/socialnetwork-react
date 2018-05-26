'use strict';
var defaults = require('defaults');
var url = require("url");
import logger from 'server/logger_middleware'

function RateLimit(options) {
    
    options = defaults(options, {
        // window, delay, and max apply per-key unless global is set to true
        windowMs: 60 * 1000, // milliseconds - how long to keep records of requests in memory
        delayAfter: 1, // how many requests to allow through before starting to delay responses
        delayMs: 1000, // milliseconds - base delay applied to the response - multiplied by number of recent hits for the same key.
        max: 5, // max number of recent connections during `window` milliseconds before sending a 429 response
        message: 'Too many requests, please try again later.',
        statusCode: 429, // 429 status = Too Many Requests (RFC 6585)
        headers: true, //Send custom rate limit header with limit and remaining
        // allows to create custom keys (by default user IP is used)
        keyGenerator: function (req /*, res*/) {
            return req.ip;
        },
        handler: function (req, res /*, next*/) {
            res.format({
                html: function () {
                    res.status(options.statusCode).end(options.message);
                },
                json: function () {
                    res.status(options.statusCode).json({message: options.message});
                }
            });
        }
    });

    // ensure that the store has the incr method
    if (typeof options.store.incr !== 'function' || typeof options.store.resetKey !== 'function') {
        throw new Error('The store is not valid.');
    }

    function rateLimit(req, res, next) {
        var pathname = url.parse(req.url).pathname;

        //avoid limiting static files, for now
        if (pathname &&
            (
                pathname.indexOf("/static/") !== -1
                ||
                pathname.indexOf("/fonts/") !== -1
                ||
                pathname.indexOf("/favicon.ico") !== -1
            )
        ) {
            return next();
        }
        var ip = req.clientIp;
        if (!ip || ip && ip.indexOf("127.0.0.1") !== -1) {
            // console.log("Skipping not valid IP --> ",ip)
            return next();
        }

        options.store.incr(ip, function (err, current) {
            if (err) {
                return next(err);
            }

            req.rateLimit = {
                limit: options.max,
                remaining: Math.max(options.max - current, 0)
            };

            if (options.headers) {
                res.setHeader('X-RateLimit-Limit', options.max);
                res.setHeader('X-RateLimit-Remaining', req.rateLimit.remaining);
            }
            var limit = 0;
            if (!req.rateLimit.remaining) {
                logger.error("WARN: RateLimit -> ", req.rateLimit.remaining, ip, pathname);
                limit = 1;
            } else {
                // console.log("INFO: Remaining -> ", req.rateLimit.remaining, ip, pathname);
            }

            if (options.max && current > options.max) {
                return options.handler(req, res, next);
            }

            if (options.delayAfter && options.delayMs && current > options.delayAfter) {
                var delay = (current - options.delayAfter) * options.delayMs;
                return setTimeout(next, delay);
            }

            next();

        });
    }

    rateLimit.resetKey = options.store.resetKey.bind(options.store);

    // Backward compatibility function
    rateLimit.resetIp = rateLimit.resetKey;

    return rateLimit;
}

module.exports = RateLimit;
