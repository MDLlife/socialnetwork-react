import path from 'path'
import StackTrace from 'stacktrace-js'

var utils = require('server/utils/utils')

import logger from 'server/logger_middleware'


module.exports = function (app) {
    
    app.on('error', (err) => {
        // console.error("server.on('error' --> ", err);
        logger.debug(
            'Got error on server level, something may be really wrong!!! ',
            err.stack)
    })
    
    app.use((err, req, res, next) => {
        // console.error("server.use((err, --> ", err);
        // logger.info("err stack ", err.stack);
        // logger.debug("Error: server.use((err, req, res, next) => ", err);
        // TODO report error here or do some further handlings
        if (err) {
            
            StackTrace.fromError(err).then((stackFrames) => {
                const errStack = stackFrames.map(sf => sf.toString()).
                    join('\n')
                logger.error(
                    'Got error on server.use, something may be really wrong!!! ',
                    {err: {stack: errStack}},
                    'window.onerror')
                
                return res.status(500).sendFile(path.join(__dirname, '../errors', '404.html'))
                
            }).catch(error => {
                logger.error(error.message)
                return res.status(500).sendFile(path.join(__dirname, '../errors', '404.html'))
                
            })
            
        } else {
            return next()
        }
        
    })
    
}








