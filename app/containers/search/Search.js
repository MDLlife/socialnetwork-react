import React, { Component, ReactClass } from 'util/safe-react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadIntroDetail } from 'actions/intro'

import { SearchCommentsList } from 'components/search/SearchCommentsList'

var analytics = require('ga-browser')()

import {
    SearchBox,
    SearchkitProvider,
    SideBar,
    Layout,
    LayoutBody,
    LayoutResults,
    ActionBar,
    ActionBarRow,
    RefinementListFilter,
    NoHits,
    Hits,
    HitsStats,
    SelectedFilters,
    HierarchicalMenuFilter,
    Pagination,
    ResetFilters,
    ViewSwitcherToggle,
    SortingSelector,
} from 'searchkit'


const RefinementOption = (props) => (
    <div className={props.bemBlocks.option().
        state({selected: props.selected}).
        mix(props.bemBlocks.container('item'))}
         onClick={props.onClick}>
        <div className={props.bemBlocks.option('text')}>{props.label}</div>
        <div className={props.bemBlocks.option('count')}>{props.count}</div>
    </div>
)

const SelectedFilter = (props) => (
    <div className={props.bemBlocks.option().
        mix(props.bemBlocks.container('item')).
        mix(`selected-filter--${props.filterId}`)}>
        <div className={props.bemBlocks.option(
            'name')}>{props.labelKey}: {props.labelValue}</div>
        <div className={props.bemBlocks.option('remove-action')}
             onClick={props.removeFilter}>x
        </div>
    </div>
)

const customHitStats = (props) => {
    const {bemBlocks, hitsCount, timeTaken} = props
    
    return (
        <div className={bemBlocks.container()} data-qa="hits-stats">
            <div className={bemBlocks.container('info')} data-qa="info">
                We found {hitsCount} talents ({timeTaken} milliseconds)
            
            </div>
        </div>
    )
}

class Search extends Component {
    
    componentDidMount () {
        analytics('create', 'UA-51773618-1', 'auto')
        setInterval(function () {
            ga('send', 'event', 'ping', window.location.href, {}, 0)
        }, 10000)
    }
    
    render () {
        
        const style = {
            background: 'hsla(0, 0%, 100%, 1.15) !important', color: 'black',
        }
        
        const searcbox = <SearchkitProvider searchkit={this.props.searchkit}>
            <Layout>
                <SearchBox placeholder={this.props.placeholder}
                           style={style}
                           autofocus={true}
                           searchThrottleTime={2500}
                           searchOnChange={true}
                           prefixQueryFields={[
                               'name',
                               'nickname']}/>
                <LayoutBody>
                    <SideBar>
                        
                        <RefinementListFilter
                            id="talent_role"
                            title="talent_role"
                            field="talent_role"
                            operator="AND"
                            size={2}/>
                        
                        <RefinementListFilter
                            id="name"
                            title="name"
                            field="name"
                            operator="AND"
                            size={5}/>
                        
                        <HierarchicalMenuFilter
                            fields={['gender']}
                            title="gender"
                            id="gender"/>
                        
                        <HierarchicalMenuFilter
                            fields={['ethnicity']}
                            title="ethnicity"
                            id="ethnicity"/>
                        
                        {/*<RefinementListFilter*/}
                            {/*id="sentiment"*/}
                            {/*title="Sentiment"*/}
                            {/*field="sentiment"*/}
                            {/*operator="AND"*/}
                            {/*size={5} itemComponent={RefinementOption}/>*/}
                    
                    </SideBar>
                    
                    <LayoutResults>
                        
                        <ActionBar>
                            
                            <ActionBarRow>
                                <HitsStats component={customHitStats}/>
                                
                                <ViewSwitcherToggle/>
                                <SortingSelector options={[
                                    {
                                        label: 'Latest Talents',
                                        field: 'updated_at',
                                        order: 'desc',
                                        defaultOption: true,
                                    },
                                    {
                                        label: 'Earliest Talents',
                                        field: 'updated_at',
                                        order: 'asc',
                                    },
                                    // {
                                    //     label: 'Sentiment (Bad to Good)',
                                    //     field: 'sentiment',
                                    //     order: 'asc',
                                    // },
                                    // {
                                    //     label: 'Sentiment (Good to Bad)',
                                    //     field: 'sentiment',
                                    //     order: 'desc',
                                    // },
                                
                                ]}/>
                            </ActionBarRow>
                            
                            <ActionBarRow>
                                <SelectedFilters
                                    itemComponent={SelectedFilter}/>
                                <ResetFilters/>
                            </ActionBarRow>
                        
                        </ActionBar>
                        
                        <Hits scrollTo={false} mod="" hitsPerPage={10}
                              listComponent={SearchCommentsList}
                              itemComponent={this.props.type}
                              highlightFields={[
                                  'talent_role',
                                  'name',
                                  'gender',
                                  'ethnicity',
                                  'updated_at']}
                              sourceFilter={[
                                  'talent_role',
                                  'name',
                                  'gender',
                                  'ethnicity',
                                  'sentiment',
                                  'updated_at',
                                  'avatarurl'

                              ]}/>
                        
                        <NoHits suggestionField={'name'}/>
                        <Pagination showNumbers={true}/>
                    
                    </LayoutResults>
                </LayoutBody>
            </Layout>
        </SearchkitProvider>
        
        return (
            <div>
                {searcbox}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {comment: state.introDetail}
}

Search.propTypes = {
    searchResults: PropTypes.object
}

export { Search }
export default connect(mapStateToProps, {loadIntroDetail})(Search)
