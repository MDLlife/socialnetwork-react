import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Menu from '../Menu';
import Avatar from 'material-ui/Avatar';
import LoginStore from 'store/LoginStore';

const muiTheme = getMuiTheme({
    stepper: {
        iconColor: 'rgb(234, 47, 133)'
    }
});

class Master extends Component {
    onClickMenu(){
        window.location.href = '/today';
    }
    render() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '';

        const {children, t, i18n} = this.props;
        return (
            <div style={{backgroundColor: '#EEF2F5'}}>
                <Helmet
                    htmlAttributes={{"lang": "en", "class": "change-back-color"}} // amp takes no value
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
                        showMenuIconButton={false}
                        title={<img src="/static/img/logo_with_text.svg" alt="" style={{height: 60}}/>}
                        iconElementRight={
                            <div>
                                <span
                                    className='profile-name'
                                    style={{
                                        position: 'relative',
                                        top: -7,
                                        right: 15,
                                    }}>{t('welcome_to_mdl')}, {username}</span>
                                <Avatar src={avatarurl} size={36} style={{
                                    position: 'relative',
                                    top: -7,
                                    borderRadius: '50%'
                                }} />
                                <Menu  {...this.props}/>
                            </div>
                        }
                        style={{
                            backgroundColor: 'white',
                        }}
                        titleStyle={{
                            color: 'black'
                        }}
                        // onClick={this.onClickMenu}
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