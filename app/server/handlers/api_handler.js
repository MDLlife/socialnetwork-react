var GIT_HASH = require('server/version.js').GIT_HASH
var VERSION = require('server/version.js').VERSION

/** LOGGER **/
import logger from 'server/logger_middleware'

/** LOGGER **/

module.exports = function (
    app, REDIS_CONNECTION, limiter) {
    
    app.get('/versions.json', limiter, (req, res) => {
        var versions = {
            version: VERSION,
            GIT_HASH: GIT_HASH,
        }
        logger.debug(versions)

        res.send(versions)
    })

}