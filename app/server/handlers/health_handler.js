var utils = require('../utils/utils')
import logger from 'server/logger_middleware'

module.exports = function (app, REDIS_CONNECTION) {
    
    // var ip = null
    // require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    //     ip = 'http://' + add + ':' + port + '/'
    // })
    
    app.get('/health', function (req, res) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept')
        
        logger.debug('****** Will test REDIS connection')
        REDIS_CONNECTION.set('foo_rand000000000000', true, 'EX', 10)
        const redisStatus = REDIS_CONNECTION.get('foo_rand000000000000')
        
        res.send({redis_healthy: redisStatus})
    })
    
}








