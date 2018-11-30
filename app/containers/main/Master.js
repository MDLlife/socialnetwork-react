import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {withNamespaces} from 'react-i18next';

class Master extends Component {
    render() {
        const {children, t, i18n} = this.props;
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        const translateProps = {
            changeLanguage: changeLanguage,
            t: t,
            i18n: i18n,
        }

        return (
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

                <div>{React.cloneElement(children, {...translateProps})}</div>

            </div>
        )
    }
}

Master.propTypes = {
    children: PropTypes.node,
    route: PropTypes.object.isRequired,
};

export default connect()(withNamespaces('translation')(Master))