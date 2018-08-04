import React from 'util/safe-react';
var createReactClass = require('create-react-class');

var jdenticon = require("jdenticon");
var md5 = require('md5');

module.exports = createReactClass({
    render: function () {
        return (<div
            dangerouslySetInnerHTML={{__html:jdenticon.toSvg(md5(this.props.nick ? this.props.nick : ""), this.props.size ? this.props.size : 250)}}></div>);
    }
});