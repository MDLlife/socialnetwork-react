import { CALL_API, CHAIN_API } from 'middleware/api'
import config from 'config'
var COMENTARISMO_ANALYTICS_URL = config.COMENTARISMO_ANALYTICS_URL;

export const LOADED_ANALYTICS_DETAIL = Symbol('LOADED_ANALYTICS_DETAIL')
export function loadAnalyticsDetail ({ id }) {
  return {
    [CHAIN_API]: [
      ()=> {
        return {
          [CALL_API]: {
            method: 'get',
            path: `${COMENTARISMO_ANALYTICS_URL}/getviews?table=analytics&index=titleurlize&value=${id}&range=999`,
            successType: LOADED_ANALYTICS_DETAIL
          }
        }
      }
    ]
  }
}
