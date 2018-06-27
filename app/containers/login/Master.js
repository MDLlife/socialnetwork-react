import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import config from 'config';

class Master extends Component {
    render() {
        const {children} = this.props;
        return(
            <div>
                <Helmet
                    htmlAttributes={{"lang": "en"}} // amp takes no value
                    title="MDL website."
                    titleTemplate="MDL.live - %s"
                    meta={[
                        {"name": "description", "content": "Welcome to MDL"},
                    ]}>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function() {
                       if(‘serviceWorker’ in navigator) {
                        navigator.serviceWorker.register(‘/mdl-sw-file.js’);
                       }
                     })();`
                    }}/>
                </Helmet>
                {children}
            </div>
        )
    }
}

Master.propTypes = {
    children: PropTypes.node,
    route: PropTypes.object.isRequired,
};

export default connect()(Master)