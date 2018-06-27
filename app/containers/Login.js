import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const bgUrl = "/static/img/IntroLoginBG.jpg";

class Login extends Component {
    render() {
        return (
            <div style={{
                background: `url('${bgUrl}') no-repeat center center fixed`,
                backgroundSize: 'cover',
                height: '100vh'
            }}>
                <div>
                    <a href="/social">
                        <img
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                position: 'relative',
                                top: '20vh',
                                cursor: 'pointer'
                            }}
                             src="/static/img/Logo.png"
                             alt=""
                        />
                    </a>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Login);