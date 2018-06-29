import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';


class SocailLogin extends Component {
    render() {
        return [
            <Row key='b'>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>Log in with</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row key='c'>
                <Col xs={12}>
                    <ul className='text-center' style={{listStyle: 'none', padding: 0}}>
                        <li>
                            <button
                                style={{backgroundColor: '#3B5998', marginTop: 42}}
                                className='radius-button clear-button'>
                                Facebook
                            </button>
                        </li>
                        <li>
                            <button style={{backgroundColor: '#1DA1F2'}} className='radius-button clear-button'>Twitter</button>
                        </li>
                        <li>
                            <button style={{backgroundColor: '#DB4437'}} className='radius-button clear-button'>Google</button>
                        </li>
                        <li>
                            <button style={{backgroundColor: '#6CC644'}} className='radius-button clear-button'>GitHub</button>
                        </li>
                        <li>
                            <button style={{backgroundColor: '#102938'}} className='radius-button clear-button'>YOYOW</button>
                        </li>
                    </ul>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SocailLogin)

