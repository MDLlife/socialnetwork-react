import React from 'util/safe-react';
import {createLocation, createMemoryHistory} from 'history';

import {match, RouterContext} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import Helmet from "react-helmet";

import logger from 'server/logger_middleware'
import configureStore from 'store/configureStore';
import createRoutes from 'routes/index';
import {I18nextProvider} from 'react-i18next'; // has no proper import yet
import Backend from 'i18next-node-fs-backend';
import path from 'path';
import fs from 'fs';
import i18n from '../../i18n';

var serialize = require('serialize-javascript');

var utils = require("server/utils/utils")

var scriptSrcs = utils.getScriptSrcs()
const styleSrc = utils.getStyleSrc()
import express from 'express';

const i18nextMiddleware = require('i18next-express-middleware');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('app');


module.exports = function (app, REDIS_CONNECTION, limiter) {

    app.use(i18nextMiddleware.handle(i18n));
    app.use('/locales', express.static(`${appSrc}/locales`));

    i18n
        .use(Backend)
        .use(i18nextMiddleware.LanguageDetector)
        .init(
            {
                preload: ['en', 'de'],
                backend: {
                    loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
                    addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`,
                },
            },
            () => {
                app.get('*', limiter, (req, res, next) => {
                    let location = createLocation(req.url)
                    let reqUrl = location.pathname + location.search

                    let memoryHistory = createMemoryHistory({
                        initialEntries: ['/'],  // The initial URLs in the history stack
                        initialIndex: 0,          // The starting index in the history stack
                        keyLength: 6,             // The length of location.key
                        // A function to use to confirm navigation with the user. Required
                        // if you return string prompts from transition hooks (see below)
                        getUserConfirmation: null,
                    })

                    let store = configureStore()
                    const history = syncHistoryWithStore(memoryHistory, store, {
                        selectLocationState: () => (state => state.routing),
                    })
                    let routes = createRoutes(history)


                    match({routes, location},
                        (error, redirectLocation, renderProps) => {
                            if (redirectLocation) {
                                return res.redirect(301, redirectLocation.pathname +
                                    redirectLocation.search)
                            } else if (error) {
                                logger.info('Error: 500 internal error ' + location,
                                    error.stack)
                                return res.status(500).send(error.message)
                            }

                            let [getCurrentUrl, unsubscribe] = subscribeUrl()

                            var searchCss = []
                            if (reqUrl.indexOf('/search') !== -1) {
                                var q = req.query.q
                                // console.log("SERVER QUERY -> ", q)
                                renderProps.query = q
                                searchCss = [
                                    '/static/searchkit/dist/theming/components.css',
                                    '/static/searchkit/dist/theming/theme.css',
                                    '/static/searchkit/dist/theming/vars.css'
                                ];
                            }

                            getReduxPromise().then(() => {

                                // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
                                // user agent is not known.
                                global.navigator = {userAgent: req.headers['user-agent']}

                                let html = ReactDOMServer.renderToString(
                                    <I18nextProvider i18n={req.i18n}>
                                        <Provider store={store} key="provider">
                                            {<RouterContext {...renderProps}/>}
                                        </Provider>
                                    </I18nextProvider>,
                                )

                                let reduxState = serialize(store.getState(),
                                    {isJSON: true})

                                let head = Helmet.renderStatic()
                                //logger.info("Helmet.rewind -> "+head.title.toString());
                                if (head.title.toString() ===
                                    '<title data-react-helmet="true"></title>') {
                                    head.title = '<title data-react-helmet="true">Loading ... </title>'
                                }

                                if (getCurrentUrl() === reqUrl) {
                                    res.render('index', {
                                        html,
                                        head,
                                        scriptSrcs,
                                        reduxState,
                                        styleSrc,
                                        searchCss,
                                    })
                                } else {
                                    logger.info('Redirect 302 ' + location)
                                    res.redirect(302, getCurrentUrl())
                                }

                                unsubscribe()
                            }).catch((err) => {
                                unsubscribe()
                                next(err)
                            })

                            function getReduxPromise() {
                                let {query, params} = renderProps
                                if (!renderProps.components[renderProps.components.length -
                                    1]) {
                                    return Promise.resolve()
                                }
                                let comp = renderProps.components[renderProps.components.length -
                                1].WrappedComponent
                                // console.log("getReduxPromise, ",(comp && comp.fetchData), {query})
                                let promise = comp && comp.fetchData
                                    ? comp.fetchData({query, params, store, history})
                                    : Promise.resolve()

                                return promise
                            }
                        })

                    function subscribeUrl() {
                        let currentUrl = location.pathname + location.search
                        let unsubscribe = history.listen((newLoc) => {
                            if (newLoc && newLoc.action === 'PUSH') {
                                currentUrl = newLoc.pathname + newLoc.search
                            }
                        })
                        return [
                            () => currentUrl,
                            unsubscribe,
                        ]
                    }
                })
            })
}