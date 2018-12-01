import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import LoginStore from 'store/LoginStore';
import Avatar from 'material-ui/Avatar';

class SelectRole extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '//via.placeholder.com/145x145';

        this.setState({
            avatarurl: avatarurl,
            username: username,
        })
    }

    onClickBooker() {
        if (typeof window !== 'undefined') {
            window.location.href = '/login/booker-role'
        }
    }

    onClickTalent() {
        if (typeof window !== 'undefined') {
            window.location.href = '/login/talent-role'
        }
    }

    render() {
        const {t} = this.props;

        return [
            <Row>
                <Col height="42" width="42">
                    <h1 className='log-in-with text-center login-header-margin'>{t('hi').replace('%1$s', '')} {this.state.username}</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col className='center avatar-container'>
                    <Avatar src={this.state.avatarurl} size={145} style={{float: 'right'}}/>
                </Col>
            </Row>,
            <Row>
                <Col className='center'>
                    <h2>{t('who_are_you')}</h2>
                </Col>
            </Row>,
            <Row>
                <Col className='center'>
                    <button onClick={this.onClickBooker} href="" style={{width: 150, marginRight: 24}}
                            className='main-button radius-button clear-button'>
                        {t('booker')}
                    </button>
                    <button onClick={this.onClickTalent} style={{width: 150}}
                            className='main-button radius-button clear-button'>
                        {t('talent')}
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(SelectRole);