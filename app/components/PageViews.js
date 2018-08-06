import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadAnalyticsDetail} from 'actions/analytics'
import PropTypes from 'prop-types';

class PageViews extends Component {

    componentDidMount() {
       let {id} = this.props
       this.props.loadAnalyticsDetail({id})
    }


    render() {
        return (

            <div style={{
                marginRight: 20
            }}>
                <img
                    src="/static/img/outline-visibility-24px.svg"
                    alt=""
                    style={{
                        marginRight: 5,
                        width: 24
                    }}
                />
                <span>{this.props.analytics ? this.props.analytics.count : 0}</span>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {analytics: state.analytics}
}

PageViews.propTypes = {
    analytics: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {loadAnalyticsDetail})(PageViews)