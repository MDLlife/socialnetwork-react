var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var WEBPACK_PORT = process.env.WEBPACK_PORT || 3001;

new WebpackDevServer(webpack(config), {
  headers: { 'Access-Control-Allow-Origin': '*' },
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(WEBPACK_PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
    process.exit(1)
  }else {

      console.log(`Webpack dev server is listening at localhost: ${WEBPACK_PORT}`);
  }
});
