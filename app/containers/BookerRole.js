import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class BookerRole extends Component {
    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>Hi, Username</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} style={{  marginTop: 40 }} className='center'>
                    <h2 className='login-header-margin'>Are you looking for</h2>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button style={{ width: 150, marginRight: 24 }}
                            className='main-button radius-button clear-button'>
                        Gigs
                    </button>
                    <button style={{ width: 150 }}
                            className='main-button radius-button clear-button'>
                        Talents
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(BookerRole);