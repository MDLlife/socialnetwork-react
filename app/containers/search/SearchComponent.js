import React, { Component, ReactClass } from 'util/safe-react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'

import Helmet from 'react-helmet'

import { loadSearchResults } from 'actions/search'
import Promise from 'bluebird'
import {
    SearchkitManager,
} from 'searchkit'

import { Search } from './Search'
import { getSearchHost, gup } from 'util/searchutils'
import config from 'config';

const index = 'news'

class SearchComponent extends Component {
    
    static fetchData ({store, query}) {
        // console.log('SearchComponent fetchData, ', query)
        if (query) {
            return store.dispatch(loadSearchResults({index, query}))
        } else {
            return Promise.resolve()
        }
    }
    
    render () {
        let isServer = typeof window === 'undefined'
        
        let searchOnLoad = false
        
        let q = gup('q')
        if (q) {
            searchOnLoad = true
        }
        
        var searchOnTypeUrl = getSearchHost(index)
        
        let results = this.props.searchResults
            ? this.props.searchResults.results
            : {}
        let state = this.props.searchResults
            ? this.props.searchResults.state
            : {}
        
        // console.log('GOT RESULTS ', results, state, this.props.searchResults)
        
        const searchkit = new SearchkitManager(searchOnTypeUrl, {
            searchOnLoad: searchOnLoad,
            useHistory: !isServer,
            httpHeaders: {
                "COMENTARISMO-KEY": config.COMENTARISMO_KEY
            },
        }, {
            results: results,
            state: state,
        })
        
        searchkit.setQueryProcessor((plainQueryObject) => {
            // console.log('queryProcessor, ', plainQueryObject)
            if (plainQueryObject.filter) {
                // hot fix for ES5
                plainQueryObject.post_filter = plainQueryObject.filter
                delete plainQueryObject.filter
            }
            return plainQueryObject
        })
        
        var searcbox = <Search searchkit={searchkit}
                               searchResults={this.props.searchResults}
                               type="news"
                               placeholder="Search for talents. (try: tom)"/>
        
        return (
            <div>
                <Helmet
                    htmlAttributes={{'lang': 'en'}} // amp takes no value
                    title="MDL Search Engine - Search for any talent"
                    titleTemplate="Search Comentarismo.com - %s"
                    meta={[
                        {
                            'name': 'description',
                            'content': 'Welcome to Search on Talents',
                        },
                        {
                            'property': 'og:type',
                            'content': 'article',
                        },
                    ]}
                />
                
                {searcbox}

                <div className="clearfix"/>

            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        searchResults: state.loadSearchResults,
    }
}

SearchComponent.propTypes = {
    searchResults: PropTypes.object,
}

export { SearchComponent }
export default connect(mapStateToProps, {loadSearchResults})(SearchComponent)
