var RateLimit = require('server/handlers/express-rate-limit')
var RedisStore = require('server/db/redis-store')

module.exports.createRedisRateLimit = function (REDIS_CONNECTION, EXPIRE_LIMIT, MAX_LIMIT, DELAY_LIMIT) {
    
    var expireLimit = process.env.EXPIRE_LIMIT || 60
    var maxLimit = process.env.MAX_LIMIT || 20
    var delayLimit = process.env.DELAY_LIMIT || 0
    
    var limiter = new RateLimit({
        store: new RedisStore({
            client: REDIS_CONNECTION,
            expiry: expireLimit,
        }),
        max: maxLimit, // limit each IP to 100 requests per windowMs
        delayMs: delayLimit, // disable delaying - full speed until the max limit is reached
    })
    
    return limiter;
}