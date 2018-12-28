import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import _ from 'lodash';
import CircularProgress from 'material-ui/CircularProgress';
import Post from './news/Post'; // render one news post
import Future from './news/Future'; // render one news post
import {getNewsFromComentarismoAPI} from 'middleware/sa'

var InfiniteScroll = require('../InfiniteScroll')(React);

class NewsFeed extends Component {
    constructor(props) {
        super();
        this.state = {
            skip: 0,
            limit: 5,
            articles: [],
            hasMore: true
        }
    }

    selectingHeads = event => {
        if (event.target.value === 2) {
            window.location.href = '/today/news/genre/future'
        } else {
            window.location.href = '/today'
        }
    };

    handlePageChange(skip, limit) {
        var index;
        var value;
        if (!this.props.value) {
            index = "genre";
            value = "news";
        } else {
            index = this.props.index;
            value = this.props.value;
        }

        //console.log(index,value);
        getNewsFromComentarismoAPI("news", index, value, skip, limit, "date", "desc", 10, function (err, res) {
            // Do something
            if (err || !res || res.body.length === 0) {
                //this.props.params.hasMore = false;
                this.setState({hasMore: false});
            } else {
                var articles = res.body;
                var hasMore = articles.length === limit;
                var newArticles = _.union(this.state.articles, articles);

                this.setState({skip: skip, limit: limit, articles: newArticles, hasMore: hasMore});
            }
        }.bind(this));
    }

    getLoaderElement() {
        return (
            <div>
                <CircularProgress size={80} thickness={5}/>
            </div>
        )
    }


    render() {
        const {t, i18n} = this.props;

        const translateProps = {
            t: t,
            i18n: i18n,
        };


        var value;
        if (!this.props.value) {
            value = "news";
        } else {
            value = this.props.value;
        }

        if (!this.state.articles) {
            this.setState({articles: []});
        }
        var that = this;
        return [
            <div>
                <hr style={{ margin: '-1px 0px 0px', height: '10px', border: 'none' }}/>
                <Col xs={7}>


                    <InfiniteScroll
                        ref='masonryContainer'
                        skip={0}
                        limit={50}
                        loader={this.getLoaderElement()}
                        loadMore={this.handlePageChange.bind(this)}
                        hasMore={this.state.hasMore}>
                        {
                            that.state.articles.map(function (article) {
                                var mainSection = null;
                                if (value === 'future') {
                                    mainSection = <Future article={article} {...translateProps}/>;
                                } else {
                                    mainSection = <Post article={article} {...translateProps} />;
                                }
                                return (
                                    mainSection
                                );
                            })
                        }
                    </InfiniteScroll>

                </Col>,
                <Col xs={2}>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0
                    }}>
                        <li
                            className={`list-item ${value === 'news' ? 'selected-item' : null}`}
                            value="1"
                            onClick={this.selectingHeads}
                        >
                            {t('news')}
                        </li>
                        <li
                            className={`list-item ${value === 'future' ? 'selected-item' : null}`}
                            value="2"
                            onClick={this.selectingHeads}
                        >
                            {t('future')}
                        </li>
                    </ul>
                </Col>
            </div>
        ]
    }
}


function mapStateToProps(state) {
    return {
        articles: state.articles,
        page: 50,
        hasMore: true,
        perPage: 50,
        index_: state.index_,
        value_: state.value_,
    }
}

export default connect(mapStateToProps)(NewsFeed)