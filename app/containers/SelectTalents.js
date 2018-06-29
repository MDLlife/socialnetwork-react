import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class SelectTalents extends Component {
    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>Talent</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <h2>Please, select your role</h2>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} style={{textAlign: 'center'}}>
                    <img src="" alt=""/>
                    <p><b>Model</b></p>
                    <p>I am looking for model gigs</p>
                    <button style={{ width: 200, marginTop: 10 }}
                            className='main-button radius-button clear-button'>
                        Select
                    </button>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} style={{textAlign: 'center'}}>
                    <img src="" alt=""/>
                    <p><b>Model</b></p>
                    <p>I am looking for model gigs</p>
                    <button style={{ width: 200, marginTop: 10 }}
                            className='main-button radius-button clear-button'>
                        Select
                    </button>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} style={{textAlign: 'center'}}>
                    <img src="" alt=""/>
                    <p><b>Model</b></p>
                    <p>I am looking for model gigs</p>
                    <button style={{ width: 200, marginTop: 10 }}
                            className='main-button radius-button clear-button'>
                        Select
                    </button>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center info-panel'>
                    <p style={{fontSize: 18, lineHeight: '68px'}}>Other roles are coming soon. We will notify!</p>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center' style={{
                    position: 'relative',
                    top: -57,
                }}>
                    <button style={{border: '2px solid white'}}
                            className='main-button radius-button clear-button'>
                        Continue
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SelectTalents);