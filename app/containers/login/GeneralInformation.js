import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import LoginStore from 'store/LoginStore';
import Avatar from 'material-ui/Avatar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SnackBar from 'material-ui/Snackbar'

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
};

class GeneralInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false,
            image: null,
            dataSource: [],
            name: '',
            agency: '',
            status: '',
            role: '1' // user role: 1 - talent or booker, 2 - fan
        }
    }

    handleChange = event => {
        // console.log("handleChange, ", event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    componentDidMount() {
        const username = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        const avatarurl = LoginStore.user && LoginStore.user.avatarurl ? LoginStore.user.avatarurl : '//via.placeholder.com/145x145';

        this.setState({
            avatarurl: avatarurl,
            username: username,
        })
    }

    handleUpdateInput = value => {
        let newArr = [];
        if (!value) {
            this.setState({
                dataSource: []
            });

            return false
        }

        superagent.get(`${config.APIS_URL}/_cts_/1.0/cities?q=${value}`).withCredentials().then(res => {
            JSON.parse(res.text).data.map(elem => {
                newArr.push(elem.attributes.name)
            });
            this.setState({
                dataSource: newArr
            });
        })
    };

    saveCity = value => {
        superagent.get(`${config.APIS_URL}/_cts_/1.0/cities?q=${value}`).withCredentials().then(res => {
            this.setState({
                city: JSON.parse(res.text).data[0]
            });
        })
    };

    switchStatus = (event, value) => {
        this.setState({status: value})
    };

    toOnboarding = () => {
        if (!this.state.city || !this.state.city.id) {
            this.setState({check: true});
            return;
        }

        let location = Object.assign({id: this.state.city.id}, this.state.city.attributes);
        console.log(location)

        //TODO: SAVE with action
        superagent
            .post(`${config.API_URL}/v1/update/users`)
            .send({
                _key: LoginStore.user._key,
                location_mdl: location
            })
            .withCredentials()
            .then(res => {
                if (res.error === false) {
                    window.location.href = "/login/select-role";
                } else {
                    console.log("Could not save the user !!!!!!!! ", res.error)
                    this.setState({check: true});
                }
            });
    };

    handleRequestClose = () => {
        this.setState({
            check: false,
        });
    };

    render() {
        console.log(this.state)
        return [
            <Row>
                <Col xs={12}>
                    <h1 className='log-in-with text-center login-header-margin'>General information</h1>
                    <img className='center-line' src="/static/img/Line.png" alt=""/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center avatar-container'>
                    <Avatar src={this.state.avatarurl} size={145} style={{float: 'right'}}/>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <button className='email-confirmation-actions-buttons clear-button'
                            style={{marginTop: 30, backgroundColor: 'transparent'}}>Change photo
                    </button>
                </Col>
            </Row>,
            <Row>
                <Col xs={12} className='center'>
                    <TextField
                        value={this.state.username}
                        floatingLabelText='Name'
                        name='username'
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
                        onNewRequest={this.saveCity}
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
                <SnackBar
                    open={this.state.check}
                    message="Please fill in all fields"
                    autoHideDuration={10000}
                    onRequestClose={this.handleRequestClose}
                />
            </Row>
        ]
    }
}

export default connect()(GeneralInformation);