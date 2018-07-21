import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';

class BookerRole extends Component {

    onClickGigs() {
        if (typeof window !== 'undefined') {
            // window.location.href = '/login/booker-role'
        }
    }

    onClickTalents() {
        if (typeof window !== 'undefined') {
            // window.location.href = '/login/select-talents'
        }
    }

    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>Hi, Username</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} style={{marginTop: 40}} className='center'>
                    <h2 className='login-header-margin'>Are you looking for</h2>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button onClick={this.onClickGigs} style={{width: 150, marginRight: 24}}
                            className='main-button radius-button clear-button'>
                        Gigs
                    </button>
                    <button onClick={this.onClickTalents} style={{width: 150}}
                            className='main-button radius-button clear-button'>
                        Talents
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(BookerRole);