const browserBunyan = require('browser-bunyan')
import xhr from 'xhr'

function request (data, cb) {
    return xhr({
        url: '/log',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, (err, res) => {
        return cb(err, res)
    })
}

const rootLogger = browserBunyan.createLogger({
    name: 'mdl.live',
    serializers: {
        err: browserBunyan.stdSerializers.err,
    },
    streams: [
        {
            level: 'info',
            stream: new browserBunyan.ConsoleFormattedStream(),
            type: 'raw',
        },
        {
            level: 'info',
            stream: {
                
                write (rec) {
                    let counter = 0
                    const send = () => {
                        request(rec, (err, response) => {
                            if ((err || response.statusCode !== 200) &&
                                counter < 5) {
                                counter += 1
                                
                                send()
                            }
                        })
                    }
                    
                    send()
                },
            },
            type: 'raw',
        },
    ],
})

const logger = rootLogger.child({
    type: 'client',
    sha: process.env.GIT_HASH,
})

module.exports.logger = logger
module.exports.rootLogger = rootLogger