import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class SelectRole extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: ''
        }
    }

    render() {
        return [
            <Row>
                <Col >
                    <h1 className='log-in-with text-center login-header-margin'>Hi, Username</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col  className='center avatar-container'>
                    <img className='avatar' src={this.state.image ? this.state.image : 'http://via.placeholder.com/145x145'} alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col  className='center'>
                    <h2>Who are you?</h2>
                </Col>
            </Row>,
            <Row>
                <Col className='center'>
                    <button style={{ width: 150, marginRight: 24 }}
                            className='main-button radius-button clear-button'>
                        Booker
                    </button>
                    <button style={{ width: 150 }}
                            className='main-button radius-button clear-button'>
                        Talent
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SelectRole);