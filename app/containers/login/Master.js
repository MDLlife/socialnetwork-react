import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-bootstrap';

const topRight = '/static/img/TopRight.png';
const bottomLeft = '/static/img/BottomLeft.png';
const logo = '/static/img/LogoWithText.png';

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
                <MuiThemeProvider>
                    <div
                        className='multi-bg'
                        style={{
                            height: '100vh',
                            width: '100vw',
                            backgroundImage: `url("${topRight}"), url("${bottomLeft}")`,
                            backgroundRepeat: 'no-repeat, no-repeat',
                            backgroundPosition: 'top right, bottom left'
                        }}
                    >
                        <Grid className='main-content-container'>
                            <Row>
                                <Col xs={12}>
                                    <img
                                        className='logo-login'
                                        style={{
                                            margin: '20px 0 0 20px',
                                        }}
                                        src={logo}
                                        alt="Logo"
                                    />
                                </Col>
                            </Row>
                            {children}
                        </Grid>

                        <div className='menu-footer-container'>
                            <ul className='menu-footer'>
                                <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="//mdl.life">About</a></li>
                                <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">API</a></li>
                                <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Contact</a></li>
                                <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Terms of Use</a></li>
                                <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

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