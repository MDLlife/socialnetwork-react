import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import LoginStore from 'store/LoginStore';

class BookerRole extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

     componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';

        this.setState({
            username: username,
        })
    }

    onClickGigs() {
        if (typeof window !== 'undefined') {
            //TODO: link when having new layout
            // window.location.href = '/login/booker-role'
        }
    }

    onClickTalents() {
        if (typeof window !== 'undefined') {
            //TODO: link when having new layout
            // window.location.href = '/login/select-talents'
        }
    }

    onClickFan(){
         if (typeof window !== 'undefined') {
             //TODO: link when having new layout
            window.location.href = '/onboarding/fan'
        }
    }

    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>Hi, {this.state.username}</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <h2>Are you looking for</h2>
                </Col>
            </Row>,
            <Row style={{marginTop: 30}}>
                <Col  xs={6} smOffset={2} sm={4} mdOffset={3} lgOffset={3} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/model.png" alt="" style={{ width: 150, height: 150 }}/>
                    <button onClick={this.onClickTalents}
                            className='main-button radius-button clear-button'>
                        Talent
                    </button>
                </Col>
                <Col xs={6} sm={4} md={3} lg={3} style={{textAlign: 'center'}}>
                    <img src="/static/img/dancer.png" alt="" style={{ width: 150, height: 150 }}/>
                    <button onClick={this.onClickGigs}
                            className='main-button radius-button clear-button'>
                        Gigs
                    </button>
                </Col>
            </Row>,
            <Row className='info-container'>
                <Col xs={12} className='center info-panel'>
                    <p style={{fontSize: 18, lineHeight: '68px'}}>I just want to see what's up here.</p>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center' style={{
                    position: 'relative',
                    top: -57,
                }}>
                    <button onClick={this.onClickFan} style={{border: '2px solid white', width: 170}}
                            className='main-button radius-button clear-button'>
                        Continue as a Fan
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(BookerRole);