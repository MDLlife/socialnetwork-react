import React, { Component, ReactClass } from 'util/safe-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import Checkbox from 'material-ui/Checkbox';

import { loadIntroDetail } from 'actions/intro'

import { SearchCommentsList } from 'components/search/SearchCommentsList'
import { SearchCommentsGrid } from 'components/search/SearchCommentsGrid'

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
    HitsStats,
    SelectedFilters,
    Pagination,
    ResetFilters,
    ViewSwitcherToggle,
    ViewSwitcherHits,
    SortingSelector,
    Toggle,
    Select
} from 'searchkit'


/*const RefinementOption = (props) => (
    <div className={props.bemBlocks.option().
        state({selected: props.selected}).
        mix(props.bemBlocks.container('item'))}
         onClick={props.onClick}>
        <div className={props.bemBlocks.option('text')}>{props.label}</div>
        <div className={props.bemBlocks.option('count')}>{props.count}</div>
    </div>
)*/

const newUncheckedIcon = <svg viewBox={"0 0 24 24"} style={{height:"24px"}}><path fill={"#e3e3e3"} d={"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5"}/></svg>

const labelStyle = {
    fontSize: "14px",
    lineHeight: "26px",
    color: "#808080",
    fontFamily: "Gilroy Medium",
    };

const activeLabelStyle = {
    fontSize: "14px",
    lineHeight: "25px",
    color: "#000",
    fontFamily: "Gilroy Medium",
    };

const RefinementOption = (props) => (
    <div className={props.bemBlocks.option().
    state({selected: props.selected}).
    mix(props.bemBlocks.container('item'))+ " refinement-option"}
         onClick={props.onClick}>
        <Checkbox
            label={props.label}
            checked={props.active}
            iconStyle={{fill: '#611169', marginRight: '9px'}}
            uncheckedIcon = {newUncheckedIcon}
            labelStyle={props.active? activeLabelStyle: labelStyle}
        />
        <span style={{
            fontSize: "14px",
            lineHeight: "27px",
            color: "rgba(128, 128, 128, 0.5)",
            fontFamily: "Gilroy Medium"}}>{props.count}</span>
    </div>
);

const CustomPanel = (props) => (
    <div className={"custom-panel"}>
        <div style={props.disabled? {display: "none"}: {}} className={"custom-panel__header"}>{props.title}</div>
        <div>
        {props.children.map(el=>{
            return (el)
        })}
        </div>
    </div>
);

const SelectedFilter = (props) => (
    <div className={props.bemBlocks.option().
        mix(props.bemBlocks.container('item')).
        mix(`selected-filter--${props.filterId}`)}
        style={{
            borderRadius: "12px",
            height: "26px",
            fontFamily: 'Gilroy medium',
            color: '#61116a',
            fontSize: "14px",
            lineHeight: "12px",
            padding: "6px 15px 6px 20px"
        }}
    >
        {props.labelKey}: {props.labelValue}

        <ClearIcon
            onClick={props.removeFilter}
            style={{
                padding: "0 0 2px 9px",
                fill: "#61116a",
                height: "17px",
                cursor: "pointer"
            }}/>
        {/*<div
            className={props.bemBlocks.option('name')}
            style={{
                color: '#61116a',
                margin: 'auto',
                fontFamily: 'Gilroy medium',
                fontSize: "14px",
                lineHeight: "14px"
            }}
        >
        </div>*/}
        {/*<div className={props.bemBlocks.option('remove-action')}

             style={{
                 border: 'none',
                 margin: 0,
                 height: "11px",
                 padding: "7px 15px 7px 9px" }}
        >
        </div> */}
    </div>
);


const customHitStats = (props) => {
    const {bemBlocks, hitsCount} = props;

    return (
        <div className={bemBlocks.container()} data-qa="hits-stats">
            <div className={"hit-stats-info"} data-qa="info">
                {hitsCount} talents found

            </div>
        </div>
    )
};


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
       };

       const searchbox = <SearchkitProvider searchkit={this.props.searchkit}>
           <Layout>
                <div className={"search-background"}>
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
                            <div className={"search-sidebar-paper"}>
                                <div className={"sidebar-header"}>
                                Models
                                </div>

                                <RefinementListFilter
                                id="talent_role"
                                title="Talent role"
                                field="talent_role"
                                operator="OR"
                                size={2}
                                containerComponent={CustomPanel}
                                itemComponent={RefinementOption}
                                />

                                <RefinementListFilter
                                id="name"
                                title="Name"
                                field="name"
                                operator="OR"
                                size={5}
                                containerComponent={CustomPanel}
                                itemComponent={RefinementOption}
                                />

                                <RefinementListFilter
                                field='gender'
                                title="Gender"
                                id="gender"
                                operator="OR"
                                size={3}
                                containerComponent={CustomPanel}
                                itemComponent={RefinementOption}/>

                                <RefinementListFilter
                                field='ethnicity'
                                title="Ethnicity"
                                id="ethnicity"
                                operator="OR"
                                size={7}
                                containerComponent={CustomPanel}
                                itemComponent={RefinementOption}/>

                                {/*<RefinementListFilter*/}
                                {/*id="sentiment"*/}
                                {/*title="Sentiment"*/}
                                {/*field="sentiment"*/}
                                {/*operator="AND"*/}
                                {/*size={5} itemComponent={RefinementOption}/>*/}

                            </div>
                        </SideBar>

                    <LayoutResults>
                        <div className={"layout-results-paper"}>
                            <ActionBar>

                                <ActionBarRow>
                                    <HitsStats component={customHitStats}/>

                                    <ViewSwitcherToggle
                                    listComponent={<Toggle mod="view-switcher-toggle" />}
                                    />
                                    <SortingSelector
                                        listComponent={<Select mod={"sk-select sorting-selector"}/>}
                                        options={[
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

                            {/*<Hits scrollTo={false} mod="" hitsPerPage={10}
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

                                          ]}/>*/}
                            <ViewSwitcherHits
                            hitsPerPage={10}
                            sourceFilter={[
                                'talent_role',
                                'name',
                                'gender',
                                'ethnicity',
                                'sentiment',
                                'updated_at',
                                'avatarurl'
                            ]}
                            hitComponents = {[
                                {key:"list", title:"List", listComponent: SearchCommentsList, defaultOption: true},
                                {key:"grid", title:"Grid", listComponent: SearchCommentsGrid}
                            ]}
                            scrollTo={false}
                            mod=""
                            />


                            <NoHits suggestionField={'name'}/>
                            <Pagination showNumbers={true}/>
                        </div>
                </LayoutResults>
           </LayoutBody>
       </div>
    </Layout>
</SearchkitProvider>

        return (
            <div>
            {searchbox}
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

