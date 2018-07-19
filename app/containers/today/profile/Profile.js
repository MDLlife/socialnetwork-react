import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class Profile extends Component {
    render() {
        return (
            <Col xs={8}>
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            width: '33%',
                            height: 285,
                            marginRight: 10,
                            borderRadius: 5
                        }}
                    >

                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            width: '33%',
                            height: 285,
                            marginRight: 10,
                            borderRadius: 5
                        }}
                    >

                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            width: '33%',
                            height: 285,
                            borderRadius: 5
                        }}
                    >

                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        height: 250,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                >
                    <div>
                        <p>Medals</p>
                    </div>
                    <div>
                        <div>
                            <img
                                src="/static/img/dancer.png"
                                alt=""
                                style={{width: 110}}
                            />
                            <p>Congratulations! You are a part of MDL now!</p>
                        </div>
                    </div>

                </div>
            </Col>
        )
    }
}

export default connect()(Profile);