import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import LoginStore from 'store/LoginStore';
import Avatar from 'material-ui/Avatar';

const styles = {
    block: {
        width: 260,
        marginTop: 38,
        fontFamily: 'Gilroy Light'
    },
    thumbSwitched: {
        backgroundColor: '#EB3386',
    },
    trackSwitched: {
        backgroundColor: '#F599C2',
    },
}

class GeneralInformation extends Component {
    constructor(props) {
        super(props);

        this.state ={
            image: null,
            dataSource: [],
            name: '',
            role: '1' // user role: 1 - talent or booker, 2 - fan
        }
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    };

    componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : 'http://via.placeholder.com/145x145';

        this.setState({
            avatarurl: avatarurl,
            username: username,
        })
    }

    handleUpdateInput = value => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
                value + value + value + value,
                value + value + value + value + value
            ],
        });
    };

    render() {
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>General information</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center avatar-container'>
                    <Avatar src={this.state.avatarurl} size={145} style={{float: 'right'}} />
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button className='email-confirmation-actions-buttons clear-button' style={{ marginTop: 30, backgroundColor: 'transparent' }}>Change photo</button>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <TextField
                        value={this.state.username}
                        floatingLabelText='Name'
                        onChange={this.handleChange}
                    />
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <AutoComplete
                        floatingLabelText="Location"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        maxSearchResults={5}
                    />
                </Col>
            </Row>,
            this.state.role === '1' ? (
                <Row>
                    <Col xs={12} className='center'>
                        <div style={styles.block}>
                            <Toggle
                                label="Open for business trips"
                                thumbSwitchedStyle={styles.thumbSwitched}
                                trackSwitchedStyle={styles.trackSwitched}
                            />
                        </div>
                    </Col>
                </Row>
            ) : <div></div>
        ]
    }
}

export default connect()(GeneralInformation);