import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import LoginStore from 'store/LoginStore';
import Avatar from 'material-ui/Avatar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import superagent from 'superagent';
import config from 'config';

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
            agency: '',
            status: '',
            role: '1' // user role: 1 - talent or booker, 2 - fan
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
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
        let newArr = [];
        if(!value) {
            this.setState({
                dataSource: []
            });

            return false
        }

        superagent.get(`https://apis.mdl.live/_cts_/1.0/cities?q=${value}`).withCredentials().then(res => {
            JSON.parse(res.text).data.map(elem => {
                newArr.push(elem.attributes.name)
            });
            this.setState({
                dataSource: newArr
            });
        })
    };

    switchStatus = (event, value) => {
        this.setState({status: value})
    };

    toOnboarding = () => {
        //TODO: SAVE
        if (typeof window !== 'undefined') {
            window.location.href = "/login/select-role";
        }
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
                        name='name'
                        onChange={this.handleChange}
                    />
                </Col>
            </Row>,
            this.state.role === '1' ? (
                <Row>
                    <Col xs={12} style={{display: 'flex', justifyContent: 'center', marginTop: 28}}>
                        <div>
                            <RadioButtonGroup
                                name='booker-status'
                                style={{display: 'flex'}}
                                defaultSelected='individual'
                                onChange={this.switchStatus}
                            >
                                <RadioButton
                                    value='individual'
                                    label='Individual'
                                    style={{marginRight: 75}}
                                />
                                <RadioButton
                                    value='agency'
                                    label='Agency'
                                />
                            </RadioButtonGroup>
                        </div>
                    </Col>
                </Row>
            ) : <div></div>,
            this.state.status === 'agency' ? (
                <Row>
                    <Col xs={12} className='center'>
                        <TextField
                            value={this.state.agency}
                            floatingLabelText='Agency name'
                            onChange={this.handleChange}
                            name='agency'
                        />
                    </Col>
                </Row>
            ) : <div></div>,
            <Row>
                <Col xs={12} className='center'>
                    <AutoComplete
                        floatingLabelText="Location"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        maxSearchResults={5}
                        filter={AutoComplete.noFilter}
                        //openOnFocus={true}
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
            ) : <div></div>,
            <Row>
                <Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                    <button
                        className='main-button radius-button clear-button'
                        onClick={this.toOnboarding}
                    >
                        Save
                    </button>
                </Col>
            </Row>
        ]
    }
}

export default connect()(GeneralInformation);