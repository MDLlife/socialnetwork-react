export const LOADED_SEARCH = Symbol('LOADED_SEARCH')
export const HTTP_ERROR = Symbol('LOADED_SEARCH')
import { getSearchHost } from 'util/searchutils'
import config from 'config';


import {
    SearchkitManager,
} from 'searchkit'

export const loadSearchResults = ({index, query}) => {
    return dispatch => {
        let searchkit = new SearchkitManager(getSearchHost(index), {
            useHistory: false,
            searchOnLoad: true,
            httpHeaders: {
                "COMENTARISMO-KEY": config.COMENTARISMO_KEY
            },
        })
        return searchkit.searchFromUrlQuery(query).then(searchResults => {
            // console.log('INFO: loadSearchResults, ', searchResults)
            dispatch(setSearchResults(searchResults))
            return searchResults
        }, err => {
            var errmsg = `loadSearchResults, error while fetching regions : ${err.message}`
            console.log('ERROR: ', errmsg)
            dispatch(setHttpError(errmsg))
        })
    }
}

export const setSearchResults = (searchResults) => {
    return {
        type: LOADED_SEARCH,
        searchResults,
    }
}

export const setHttpError = (error) => {
    return {
        type: HTTP_ERROR,
        error,
    }
}