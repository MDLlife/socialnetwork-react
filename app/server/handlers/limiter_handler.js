import path from 'path'

var url = require('url')

var expireLimit = process.env.EXPIRE_LIMIT || 60
var maxLimit = process.env.MAX_LIMIT || 20
var delayLimit = process.env.DELAY_LIMIT || 0

var RateLimit = require('server/handlers/express-rate-limit')
var RedisStore = require('server/db/redis-store')
var utils = require('server/utils/utils')

import logger from 'server/logger_middleware'

module.exports = function (app, REDIS_CONNECTION) {
    
    function limiterhandler (req, res) {
        var pathname = url.parse(req.url).pathname
        var ip = req.clientIp
        logger.debug('*&*&*& Too many requests, ', ip, pathname)



        res.format({
            html: function () {
                res.status(429).sendFile(path.join(__dirname, '../errors', '429.html'))
            },
            json: function () {
                res.status(429).
                    json(
                        {message: 'Too many hits from this IP, please try again in a moment'})
            },
        })
    }
    
    var limiter = new RateLimit({
        store: new RedisStore({
            client: REDIS_CONNECTION,
            expiry: expireLimit,
        }),
        max: maxLimit, // limit each IP to 100 requests per windowMs
        delayMs: delayLimit, // disable delaying - full speed until the max limit is reached
        handler: limiterhandler,
    })
    
    return limiter
}