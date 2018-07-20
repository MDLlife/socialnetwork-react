import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import LoginStore from 'store/LoginStore';
import Avatar from 'material-ui/Avatar';

class SelectRole extends Component {
    constructor(props) {
        super(props);



        this.state = {}



        console.log("state", this.props)
    }

    componentDidMount() {
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : 'http://via.placeholder.com/145x145';
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';

        this.setState({
            avatarurl: avatarurl,
            username: username,
        })
    }

    render() {


        return [
            <Row>
                <Col height="42" width="42">
                    <h1 className='log-in-with text-center login-header-margin'>Hi, {this.state.username}</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col className='center avatar-container'>
                    <Avatar src={this.state.avatarurl} size={145} style={{float: 'right'}} />
                </Col>
            </Row>,
            <Row>
                <Col className='center'>
                    <h2>Who are you?</h2>
                </Col>
            </Row>,
            <Row>
                <Col className='center'>
                    <button style={{width: 150, marginRight: 24}}
                            className='main-button radius-button clear-button'>
                        Booker
                    </button>
                    <button style={{width: 150}}
                            className='main-button radius-button clear-button'>
                        Talent
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SelectRole);