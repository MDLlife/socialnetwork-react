import { CALL_API, CHAIN_API } from 'middleware/api'
import config from 'config'
var COMENTARISMO_URL = config.COMENTARISMO_URL;

export const LOADED_ARTICLE_DETAIL = Symbol('LOADED_ARTICLE_DETAIL')
export function loadArticleDetail ({ id }) {
  return {
    [CHAIN_API]: [
      ()=> {
        return {
          [CALL_API]: {
            method: 'get',
            path: `${COMENTARISMO_URL}/read/news/${id}/?db=comentarismo`,
            successType: LOADED_ARTICLE_DETAIL
          }
        }
      }
    ]
  }
}
