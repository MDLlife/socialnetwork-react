import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';

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
            name: ''
        }
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
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
                    <img className='avatar' src={this.state.image ? this.state.image : 'http://via.placeholder.com/145x145'} alt=""/>
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
            </Row>,
        ]
    }
}

export default connect()(GeneralInformation);