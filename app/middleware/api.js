import superAgent from 'superagent'
import Promise, { using } from 'bluebird'
import _ from 'lodash'
import StackTrace from 'stacktrace-js'
import config from 'config';


export const CALL_API = Symbol('CALL_API')
export const CHAIN_API = Symbol('CHAIN_API')

export default ({dispatch, getState}) => next => action => {
    if (action[CALL_API]) {
        return dispatch({
            [CHAIN_API]: [
                () => action,
            ],
        })
    }
    
    if (!action[CHAIN_API]) {
        return next(action)
    }
    
    let promiseCreators = action[CHAIN_API].map((apiActionCreator) => {
        return createRequestPromise(apiActionCreator, next, getState, dispatch)
    })
    
    let overall = promiseCreators.reduce((promise, creator) => {
        return promise.then((body) => {
            return creator(body)
        })
    }, Promise.resolve())
    
    return new Promise(function (resolve, reject) { //Or Q.defer() in Q
        
        overall.finally((err) => {
            resolve(err)
        }).catch((err) => {
            StackTrace.fromError(err).then((stackFrames) => {
                const errStack = stackFrames.map(sf => sf.toString()).
                    join('\n')
                console.error(
                    'ERROR: api.js, createRequestPromise catch((err)), ',
                    errStack)
                reject(err)
            }).catch(error => {
                console.log(
                    'ERROR: api.js, createRequestPromise catch((err)), ', error,
                    error)
                reject(err)
            })
        })
        resolve(overall)
    })
}

function createRequestPromise (apiActionCreator, next, getState, dispatch) {
    return (prevBody) => {
        let apiAction = apiActionCreator(prevBody)
        
        let params = extractParams(apiAction[CALL_API])
        
        return new Promise(function (resolve, reject) {
            
            var sa = superAgent[params.method](params.url);
                if(params.method.indexOf("api.comentarismo.com")){
                    sa = sa.set('COMENTARISMO-KEY', config.COMENTARISMO_KEY)
                }

                sa.withCredentials()
                .end((err, res) => {
                        
                        if (err) {
                            
                            StackTrace.fromError(err).then((stackFrames) => {
                                const errStack = stackFrames.map(
                                    sf => sf.toString()).
                                    join('\n')
                                console.error(
                                    'ERROR: api.js, createRequestPromise, ',
                                    {err: {stack: errStack}},
                                    'window.onerror')
                            }).catch(error => {
                                console.error(error.message)
                            })
                            
                            // if (params.errorType) {
                            //     dispatch({
                            //         type: params.errorType,
                            //         error: err,
                            //     })
                            // }
                            //
                            if (_.isFunction(params.afterError)) {
                                params.afterError({getState})
                            }
                            
                             dispatch({
                                type: params.successType,
                                response: {},
                            })
                            resolve({})
                        } else {
                            
                            //var response = Object.keys(res.body).length == 0 ? res.text : res.body;
                            
                            dispatch({
                                type: params.successType,
                                response: res.body,
                            })
                            
                            if (_.isFunction(params.afterSuccess)) {
                                params.afterSuccess({getState})
                            }
                            
                            //console.log("res.body",response);
                            
                            resolve(res.body)
                        }
                        
                    },
                )
            
        })
    }
    
}

function extractParams (callApi) {
    let {method, path, successType, errorType, afterSuccess, afterError} = callApi
    let url = `${path}`
    
    return {
        method,
        url,
        successType,
        errorType,
        afterSuccess,
        afterError,
    }
}
