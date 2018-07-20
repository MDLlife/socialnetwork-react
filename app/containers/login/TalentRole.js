import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class TalentRole extends Component {
    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>Talent</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row style={{ marginTop: 40 }}>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step1.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>Set up a profile</p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step2.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>Expose your talent</p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step3.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>Grow your fame</p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/Step4.png" alt=""/>
                    <p className='step' style={{fontSize: 16, marginTop: 32}}>Connect with brands</p>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button style={{ width: 200, marginTop: 56, marginBottom: 50 }}
                            className='main-button radius-button clear-button'>
                        Next
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(TalentRole);