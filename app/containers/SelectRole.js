import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class SelectRole extends Component {
    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center'>Hi, Username</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12}>
                    <img src="http://via.placeholder.com/145x145" alt=""/>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SelectRole);