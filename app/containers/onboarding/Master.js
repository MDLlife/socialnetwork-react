import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
    stepper: {
        iconColor: 'rgb(234, 47, 133)'
    }
});

class Master extends Component {
    render() {
        const {children} = this.props;
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
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppBar
                        title={<img src="/static/img/logo_with_text.svg" alt="" style={{height: 60}}/>}
                        style={{
                            backgroundColor: 'white',
                        }}
                        titleStyle={{
                            color: 'black'
                        }}
                    />
                    {children}
                    {/*<div className='menu-footer-container'>*/}
                        {/*<ul>*/}
                            {/*<li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="//mdl.life">About</a></li>*/}
                            {/*<li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">API</a></li>*/}
                            {/*<li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Contact</a></li>*/}
                            {/*<li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Terms of Use</a></li>*/}
                            {/*<li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Privacy Policy</a></li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                </MuiThemeProvider>
            </div>
        )
    }
}

Master.propTypes = {
    children: PropTypes.node,
    route: PropTypes.object.isRequired,
};

export default connect()(Master)