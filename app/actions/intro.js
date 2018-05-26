import { CALL_API, CHAIN_API } from 'middleware/api'
import config from 'config'

export const LOADED_INTRO = Symbol('LOADED_INTRO')
export function loadIntroDetail({ index,value }) {
    //console.log("loading Intro data");
    return {
        [CHAIN_API]: [
            ()=> {
                return {
                    [CALL_API]: {
                        method: 'get',
                        path: `${config.BASE_URL}/apihomepage?index=${index}&value=${value}`,
                        successType: LOADED_INTRO
                    }
                }
            }
        ]
    }
}


export const LOADED_INTRO_PRODUCTS = Symbol('LOADED_INTRO_PRODUCTS')
export function introProductDetail({ index,value }) {
    //console.log("loading Intro data");
    return {
        [CHAIN_API]: [
            ()=> {
                return {
                    [CALL_API]: {
                        method: 'get',
                        path: `${config.BASE_URL}/apihomepage?index=${index}&value=${value}`,
                        successType: LOADED_INTRO_PRODUCTS
                    }
                }
            }
        ]
    }
}
