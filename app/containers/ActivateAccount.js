import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';

class ActivateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            error: false
        }
    }

    emailValidation = event => {
        this.setState({
            email: event.target.value
        }, () => {
            if (this.state.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
                this.setState({
                    error: true
                })
            }
            else {
                this.setState({
                    error: false
                })
            }
        })
    }

    render() {
        return [
            <Row key='b'>
                <Col xs={12}>
                    <h1 className='log-in-with text-center'>Acctivate account</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center' style={{marginTop: 50}}>
                    <TextField
                        floatingLabelText='Email'
                        floatingLabelFixed={true}
                        errorText={this.state.error && 'Please enter a valid email address'}
                        value={this.state.value}
                        onChange={this.emailValidation}
                    />
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button className='main-button login-button'>
                        Send confirmation
                    </button>
                </Col>
            </Row>

        ]

    }
}

export default connect()(ActivateAccount);