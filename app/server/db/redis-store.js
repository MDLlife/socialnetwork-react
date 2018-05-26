// License 2016 MIT Wyatt Johnson, Nathan Friedly
'use strict';
var defaults = require('defaults');
var redis = require('redis');

var RedisStore = function (options) {
    options = defaults(options, {
        expiry: 60, // default expiry is one minute
        prefix: "rl:"
    });

    // create the client if one isn't provided
    options.client = options.client || redis.createClient();

    this.incr = function (key, cb) {
        var rdskey = options.prefix + key;

        if(key &&
            (key.indexOf("127.0.0.1")!==-1
                ||
            key.indexOf("::1")!==-1

            )
         ){
            return  cb(null, 1);
        }

        options.client.multi()
            .incr(rdskey)
            .ttl(rdskey)
            .exec(function (err, replies) {
                if (err) {
                    return cb(err);
                }

                // if this is new or has no expiry
                if (replies[0] === 1 || replies[1] === -1) {
                    // then expire it after the timeout
                    options.client.expire(rdskey, options.expiry);
                }

                cb(null, replies[0]);
            });
    };

    this.resetKey = function (key) {
        var rdskey = options.prefix + key;

        options.client.del(rdskey);
    };
};

module.exports = RedisStore;
