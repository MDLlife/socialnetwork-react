var $ = require('jquery');
var createReactClass = require('create-react-class');
import DOM from 'react-dom-factories';


module.exports = function (React) {
    if (React.addons && React.addons.InfiniteScroll) {
        return React.addons.InfiniteScroll;
    }
    React.addons = React.addons || {};
    var InfiniteScroll = React.addons.InfiniteScroll = createReactClass({
        getDefaultProps: function () {
            return {
                skip: 0,
                limit: 5,
                hasMore: false,
                loadMore: function () {}
            };
        },
        componentDidMount: function () {
            this.skip = this.props.skip;
            this.limit = this.props.limit;
            this.attachScrollListener();
            this.props.loadMore(this.skip,this.limit);
            this.skip = this.skip + this.limit;
        },
        componentDidUpdate: function () {
            this.attachScrollListener();
        },
        render: function () {
            var props = this.props;
            return DOM.div(null, props.children, props.hasMore && (props.loader || InfiniteScroll._defaultLoader));
        },
        scrollListener: function () {
            var willScroll = $(window).scrollTop() === $(document).height() - $(window).height();
            if (willScroll) {
                this.detachScrollListener();
                // call loadMore after detachScrollListener to allow
                // for non-async loadMore functions
                this.props.loadMore(this.skip,this.limit);
                this.skip = this.skip + this.limit;
            }
        },
        attachScrollListener: function () {
            if (!this.props.hasMore) {
                return;
            }
            window.addEventListener('scroll', this.scrollListener);
            window.addEventListener('resize', this.scrollListener);
            this.scrollListener();
        },
        detachScrollListener: function () {
            window.removeEventListener('scroll', this.scrollListener);
            window.removeEventListener('resize', this.scrollListener);
        },
        componentWillUnmount: function () {
            this.detachScrollListener();
        }
    });
    InfiniteScroll.setDefaultLoader = function (loader) {
        InfiniteScroll._defaultLoader = loader;
    };
    return InfiniteScroll;
};