import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

// import {Row} from 'react-styled-flexboxgrid';

const topRight = '/static/img/TopRight.png';
const bottomLeft = '/static/img/BottomLeft.png';
const logo = '/static/img/LogoWithText.png';

class SocailLogin extends Component {
    render() {
        return (
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
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <img
                                style={{
                                    margin: '20px 0 0 20px',
                                }}
                                src={logo}
                                alt="Logo"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h1 className='log-in-with text-center'>Log in with</h1>
                            <img className='center-line' src="/static/img/Line.png" alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ul className='text-center' style={{listStyle: 'none', padding: 0}}>
                                <li>
                                    <button
                                        style={{backgroundColor: '#3B5998', marginTop: 42}}
                                        className='login-button'>
                                        Facebook
                                    </button>
                                </li>
                                <li>
                                    <button style={{backgroundColor: '#1DA1F2'}}className='login-button'>Twitter</button>
                                </li>
                                <li>
                                    <button style={{backgroundColor: '#DB4437'}}className='login-button'>Google</button>
                                </li>
                                <li>
                                    <button style={{backgroundColor: '#6CC644'}}className='login-button'>GitHub</button>
                                </li>
                                <li>
                                    <button style={{backgroundColor: '#102938'}} className='login-button'>YOYOW</button>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
                <div>
                    <ul style={{
                        listStyle: 'none',
                        display: 'inline-flex',

                    }}>
                        <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="//mdl.life">About</a></li>
                        <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">API</a></li>
                        <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Contact</a></li>
                        <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Terms of Use</a></li>
                        <li><a style={{color: '#656972 !important', marginRight: '2rem', textTransform: 'uppercase', fontFamily:'Open Sans, sans-serif', fontWeight: '600'}} href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect()(SocailLogin)