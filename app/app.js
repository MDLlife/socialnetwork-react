var runtime = require('offline-plugin/runtime')
runtime.install({
    onUpdating: () => {
        console.log('*&*&*& MDL SW Event:', 'onUpdating')
    },
    onUpdateReady: () => {
        console.log('*&*&*& MDL SW Event:', 'onUpdateReady')
        // Tells to new SW to take control immediately
        runtime.applyUpdate()
    },
    onUpdated: () => {
        console.log('*&*&*& MDL SW Event:', 'onUpdated')
        // Reload the webpage to load into the new version
        window.location.reload()
    },
    
    onUpdateFailed: () => {
        console.log('*&*&*& MDL SW Event:', 'onUpdateFailed')
    },
})

import 'babel-polyfill'
import React from 'util/safe-react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import configureStore from 'store/configureStore'
import createRoutes from 'routes/index'
import { Provider } from 'react-redux'

import { syncHistoryWithStore } from 'react-router-redux'

let RETRY_COUNT = 0
let stateLoaded = false

function loadState (preloadedState) {
    const store = configureStore(browserHistory, preloadedState)
    
    const history = syncHistoryWithStore(browserHistory, store, {
        selectLocationState: () => (state => state.routing),
    })
    
    ReactDOM.hydrate(
        <Provider store={store} key="provider">
            {createRoutes(history)}
        </Provider>,
        document.getElementById('root'),
    )
    
    stateLoaded = true
    
    if (process.env.NODE_ENV !== 'production') {
        window.React = React // enable debugger
        
    }
}

const intervalId = window.setInterval(() => {
    let preloadedState = document.getElementById('deferred-state').textContent
    
    if (stateLoaded) {
        console.log('*&*&*& INFO: REACT HYDRATED STATE ', stateLoaded)
        // Clear the intervalId
        window.clearInterval(intervalId)
    } else if (RETRY_COUNT > 10000) {
        console.log(
            '*&*&*& ERROR: RETRY_COUNT LIMIT REACHED! - REACT FAILED TO HYDRATE STATE ')
        //pass empty string so it continues, leave for the client to re-render the app then!
        loadState({})
        // Clear the intervalId
        window.clearInterval(intervalId)
    } else if (preloadedState) {
        try {
            const preloadedStateJSON = JSON.parse(preloadedState.trim())
            loadState(preloadedStateJSON)
        } catch (e) {
            console.log(
                '*&*&*& ERROR: REACT FAILED TO HYDRATE STATE,  will retry, ', e)
        }
    } else {
        console.log(
            '*&*&*& ERROR: REACT FAILED TO HYDRATE STATE, will retry, ')
        RETRY_COUNT = RETRY_COUNT + 1
    }
}, 10)