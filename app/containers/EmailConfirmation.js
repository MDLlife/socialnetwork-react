import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class EmailConfirmation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null
        }
    }

    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center'>Email confirmation</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center' style={{marginTop: 50}}>
                    Please check your email example and confirm your email address
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center' style={{textAlign: 'center'}}>
                    <p>If you don't see a message in your inbox, make sure the email<br/>
                    address is correct and check your span folder.</p>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button className='email-confirmation-actions-buttons'>Correct my email</button>
                    <button className='email-confirmation-actions-buttons'>Resend confirmation</button>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button className='main-button login-button'>
                        Skip
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(EmailConfirmation)