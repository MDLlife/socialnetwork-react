const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const APP_DIR = path.resolve(__dirname, 'app/app')
const PUBLIC_DIR = path.resolve(__dirname, '../', 'public')

var GIT_HASH = require('child_process').execSync('git rev-parse --short HEAD').toString().trim()

console.log(`Building with GIT_HASH: ${GIT_HASH}`)

var DEBUG = !(process.env.NODE_ENV === 'production')
var WEBPACK_PORT = process.env.WEBPACK_PORT || 3001
const PUBLIC_PATH = 'https://www.mdl.live/'

var env = {
    NODE_ENV: process.env.NODE_ENV,
    API_BASE_URL: process.env.API_BASE_URL,
}

const VENDOR_LIBS = [
    'bluebird',
    'browser-bunyan',
    'chart.js',
    'connect-timeout',
    'cookie-parser',
    'create-react-class',
    'd3',
    'diacritics',
    'drift-zoom',
    'emojione',
    'ga-browser',
    'history',
    'isomorphic-fetch',
    'jdenticon',
    'jquery',
    'jsonp',
    'jwt-decode',
    'lodash',
    'material-ui',
    'md5',
    'moment',
    'normalizr',
    'pos',
    'prop-types',
    'react',
    'react-bootstrap',
    'react-bubble-chart',
    'react-dom',
    'react-dom-factories',
    'react-helmet',
    'react-on-visible',
    'react-placeholder',
    'react-redux',
    'react-router',
    'react-router-redux',
    'react-safe-render',
    'react-sidebar',
    'react-soundplayer',
    'react-styled-flexboxgrid',
    'react-tap-event-plugin',
    'react-youtube',
    'redux',
    'redux-logger',
    'redux-thunk',
    'searchkit',
    'stacktrace-js',
    'styled-components',
    'superagent',
    'xhr',
    'xml2js'
]

if (process.env.PRINT_DEPS) {
    const packagejson = require('./package.json')
    console.log(Object.keys(packagejson.dependencies))
}

var config = {
    devtool: DEBUG ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    entry: {
        app: APP_DIR,
        vendor: VENDOR_LIBS,
    },
    resolve: {
        extensions: ['.js', '.scss'],
        modules: [
            path.resolve(__dirname, 'app'),
            'node_modules',
        ],
        alias: {
            app: APP_DIR,
            public: PUBLIC_DIR,
        },
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: DEBUG ? '[name].js' : '[name].js',
    },
    plugins: [
        new ProgressBarPlugin({
                format: '  build [:bar] ' + chalk.green.bold(':percent') +
                ' (:elapsed seconds)',
                clear: false,
            },
        ),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filname: 'vendor.js',
            minChunks: Infinity,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
            options: {
                head: {title: '', meta: ''},
                scriptSrcs: {},
                reduxState: {},
                styleSrc: [
                    `//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800`,
                    '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900',
                    '/static/all.min.css',
                ],
                searchCss: {},
            },
        }),
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                include: __dirname,
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true,
                                importLoaders: 2,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true},
                        },
                    ],

                }),
                include: path.join(__dirname,
                    'vendor/**/*.scss'),
            },
            {
                loader: 'json-loader',
                test: /.json$/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[hash].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
}

if (DEBUG) {
    config.entry.dev = [
        `webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`,
        'webpack/hot/only-dev-server',
    ]

    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
    ])
    config.output.publicPath = `http://localhost:${WEBPACK_PORT}/`
    config.module.loaders[0].query = {
        'env': {
            'development': {
                'presets': ['react-hmre'],
            },
        },
    }
} else {
    config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
            sourceMap: false,
            minimize: true,
            exclude: [/\.min\.js$/gi],
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new AssetsPlugin({path: path.join(__dirname, 'dist')}),
        new SWPrecacheWebpackPlugin({
            cacheId: 'mdl',
            filename: 'mdl-sw-file.js',
            maximumFileSizeToCacheInBytes: 4194304,
            staticFileGlobsIgnorePatterns: [
                /\.json/,
                /\.map/,
                /\.xml/,
                /\.map$/,
                /asset-manifest\.json$/],
            runtimeCaching: [
                {
                    handler: 'networkFirst',
                    urlPattern: /^https:\/\/(www\.)?mdl.live$/,
                }],
            // dontCacheBustUrlsMatching: /\.\w{8}\./,
            minify: true,
            navigateFallback: PUBLIC_PATH,
        }),
        new webpack.NamedModulesPlugin(),
        new OfflinePlugin({
            caches: {
                main: [
                    'manifest.js',
                    'vendor.js',
                    'app.js',
                ],
            },
            relativePaths: false,
            publicPath: '/',
            ServiceWorker: {
                events: true,
                entry: './pwa/sw-handler.js',
                output: '../dist/sw.js',
                publicPath: '/sw.js',
                navigateFallbackURL: '/',
            },
            AppCache: false,
            externals: [
                '/',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
            ],
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity,
            filename: 'manifest.json',
        }),
    ])
}

module.exports = config
