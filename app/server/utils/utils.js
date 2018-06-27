import path from 'path'
var fs = require('fs')

var GIT_HASH = require('server/version.js').GIT_HASH
var WEBPACK_PORT = process.env.WEBPACK_PORT || 3001
import logger from 'server/logger_middleware'

let assets = require(
    path.join(__dirname, '../../..', 'dist/webpack-assets.json'))

module.exports.getStyleSrc = function () {
    let styleSrc
    if (process.env.NODE_ENV === 'production') {
        styleSrc = [
            `//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800`,
            '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900',
            `/static/all.min.css?hash=${GIT_HASH}`,
        ]
    } else {
        styleSrc = [
            `//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800`,
            '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900',
            '/static/all.css',
        ]
    }
    return styleSrc
}

module.exports.getScriptSrcs = function () {
    let scriptSrcs
    if (process.env.NODE_ENV === 'production') {
        scriptSrcs = [
            `/mdl-sw-file.js?hash=${GIT_HASH}`,
            `/${assets.manifest.js}?hash=${GIT_HASH}`,
            `/${assets.vendor.js}?hash=${GIT_HASH}`,
            `/${assets.app.js}?hash=${GIT_HASH}`,
        ]
    } else {
        scriptSrcs = [
            `http://localhost:${WEBPACK_PORT}/vendor.js`,
            `http://localhost:${WEBPACK_PORT}/dev.js`,
            `http://localhost:${WEBPACK_PORT}/app.js`,
        ]
    }
    
    return scriptSrcs
}

module.exports.getParams = function (req) {
    
    var table = req.query.table
    var index = req.query.key
    var value = req.query.value
    var operator = req.query.operator
    var skip = req.query.skip
    var limit = req.query.limit
    var sort = req.query.sort
    var order = req.query.order || 'desc'
    
    var returnObj = {
        table: table,
        index: index,
        value: value,
        operator: operator,
        skip: skip,
        limit: limit,
        sort: sort,
        order: order,
    }
    
    if (!table || !index || !value || !operator) {
        returnObj.error = 'Invalid inputs --> '
    } else {
            logger.debug('Will parse skip, ', req.query.skip)
            logger.debug('Will parse limit, ', req.query.limit)
        
        returnObj.skip = parseInt(req.query.skip)
        returnObj.limit = parseInt(req.query.limit)
    }
    return returnObj
}

var robotsTXT;
module.exports.getRobotsTXT = function () {
    if(!robotsTXT) {
        robotsTXT = fs.readFileSync(path.join(__dirname, '../robot', 'robots.txt'))
    }
    return robotsTXT
}