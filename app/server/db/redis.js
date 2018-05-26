import redis from "redis";
import logger from 'server/logger_middleware'

module.exports.createRedisClient = function (REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, EXPIRE_REDIS, DISABLE_CACHE) {
    logger.debug(`REDIS_HOST:${REDIS_HOST}, REDIS_PORT:${REDIS_PORT}, REDIS_PASSWORD:${REDIS_PASSWORD}, EXPIRE_REDIS:${EXPIRE_REDIS}, DISABLE_CACHE=${DISABLE_CACHE}`);
    if(DISABLE_CACHE){
        return null;
    }
    var client = redis.createClient({
        host: REDIS_HOST, port: REDIS_PORT, password: REDIS_PASSWORD,
        retry_strategy: function (options) {
            
            if (options.error && options.error.code === 'ECONNREFUSED') {
                logger.error('ERROR: REDIS, ECONNREFUSED, ', options)
                // End reconnecting on a specific error and flush all commands with a individual error
                return new Error('The server refused the connection');
            }
            if (options.total_retry_time > 1000 * 60 * 60) {
                logger.error(
                    'ERROR: REDIS, options.total_retry_time > 1000 * 60 * 60, ',
                    options)
                // End reconnecting after a specific timeout and flush all commands with a individual error
                return new Error('Retry time exhausted');
            }
            if (options.times_connected > 10) {
                logger.error('ERROR: REDIS, options.times_connected > 10, ',
                    options)
                // End reconnecting with built in error
                return undefined;
            }
            // reconnect after
            return Math.max(options.attempt * 100, 3000);
        }
    });
    
    client.on("connect", function () {
        logger.info('****** REDIS will test connection');
        client.set("foo_rand000000000000", "testing redis connection", 'EX',
            EXPIRE_REDIS);
        client.get("foo_rand000000000000", redis.print);
    });
    
    client.on("error", function (err) {
        logger.error('ERROR: REDIS, ', err);
    });
    
    return client
}