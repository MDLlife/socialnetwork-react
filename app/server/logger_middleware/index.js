const server = require('server/logger_middleware/server')
let logger = server.logger

function logMiddleware (req, res) {
    let log = req.body
    if (!log) {
        const message = 'logger.logMiddleware: Body is empty!!!'
        logger.error(message)
        return res.send(new Error(message))
    } else if (typeof log === 'string') {
        log = JSON.parse(log)
    }
    
    const level = log.levelName
    
    // adding request information, like: browser, cookie, etc
    log.req = req
    
    // call now logger of the server
    if (typeof logger[level] === 'function') {
        logger[level](log, log.msg)
    } else {
        logger.warn(log, `Invalid logger level "${level}": ${log.msg}`)
    }
    
    return res.send({})
}

export default logger
export {
    logMiddleware,
}
