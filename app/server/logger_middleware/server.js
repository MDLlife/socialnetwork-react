import serverBunyan from 'bunyan'
import bFormat from 'bunyan-format'
import LogstashStream from 'server/logger_middleware/logstash-stream.js'
import SpecificLevelStream from 'server/logger_middleware/specific-level-stream.js'

const PrettyStream = require('bunyan-prettystream');

const APP_ENV = process.env.NODE_ENV || 'development'
const OUTPUT_MODE = process.env.OUTPUT_MODE || 'json' // mode for nicer human readable logs short

let streams = []

if (process.env.LOG_FILE) {
    streams.push({
        level: process.env.LOG_LEVEL || 'info',
        stream: new LogstashStream(process.env.LOG_FILE),
    })
} else if ('LOADED_MOCHA_OPTS' in process.env === false) {
    // dont do this for mocha
    streams.push({
        level: process.env.LOG_LEVEL || 'info',
        stream: bFormat({
            outputMode: OUTPUT_MODE,
        }),
    })
}

if (process.env.NODE_ENV === 'production') {
    streams.push({
        level: 'trace',
        type: 'raw',
        stream: new SpecificLevelStream(
            ['info', 'warn', 'trace', 'debug'],
            process.stdout,
        ),
    })
    
    streams.push({
        level: 'error',
        type: 'raw',
        stream: new SpecificLevelStream(
            ['error'],
            process.stderr,
        ),
    })
}else {
    var prettyStdOut = new PrettyStream();
    prettyStdOut.pipe(process.stdout);

     streams = [{
        level: 'debug',
        type: 'raw',
        stream:  prettyStdOut
    }]
}

const rootLogger = serverBunyan.createLogger({
    name: 'mdl.live',
    environment: APP_ENV,
    serializers: serverBunyan.stdSerializers,
    streams,
})


const logger = rootLogger.child({
    type: 'server',
})

module.exports.rootLogger = rootLogger
module.exports.logger = logger
