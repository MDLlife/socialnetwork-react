import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import EditIcon from 'material-ui/svg-icons/content/create';
import LoginStore from "store/LoginStore";
import Avatar from 'material-ui/Avatar';

class Profile extends Component {
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

    render() {

        return (
            <Col xs={9}>
                <hr style={{margin: '-1px 0px 0px', height: '10px', border: 'none'}}/>

                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <div
                        style={{
                            background: 'url(/static/img/IntroLoginBG.jpg) left center',
                            width: '33%',
                            height: 285,
                            marginRight: 10,
                            borderRadius: 5
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                padding: 10
                            }}
                        >
                            <EditIcon
                                color='white'
                                style={{
                                    height: 18,
                                    cursor: 'pointer',

                                }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    backgroundColor: '#00C245',
                                    height: 20,
                                    width: 20,
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: 68,
                                    top: 54,
                                    border: '1px solid white'
                                }}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Avatar src={this.state.avatarurl} size={156} style={{
                                    borderRadius: '50%',
                                    border: '1px solid blue',
                                    height: 156
                                }}/>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                color: 'white',
                                justifyItems: 'center'
                            }}
                        >
                            <div style={{fontSize: 24}}>{this.state.username}</div>
                            <div>New York, USA</div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            width: '33%',
                            height: 285,
                            marginRight: 10,
                            borderRadius: 5,
                            position: 'relative',
                        }}
                    >
                        <div
                            className='ribbon ribbon-top-left'
                        ><span>In development</span></div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 65,
                                opacity: 0.5,
                            }}
                        >
                            <img
                                src="/static/img/appearence.png"
                                alt=""
                                style={{height: 100}}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 10,
                                opacity: 0.5,
                            }}
                        >
                            I am looking for talents
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 20,
                                opacity: 0.5,
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: '#660066',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 10,
                                    padding: '10px 20px',
                                    outline: 'none'
                                }}
                            >
                                Become a Booker
                            </button>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            width: '33%',
                            height: 285,
                            marginRight: 10,
                            borderRadius: 5,
                            position: 'relative',
                        }}
                    >
                        <div
                            className='ribbon ribbon-top-left'
                        ><span>In development</span></div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 65,
                                opacity: 0.5,
                            }}
                        >
                            <img
                                src="/static/img/dancer.png"
                                alt=""
                                style={{height: 100}}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 10,
                                opacity: 0.5,
                            }}
                        >
                            I am looking for gigs
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 20,
                                opacity: 0.5,
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: '#660066',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 10,
                                    padding: '10px 20px',
                                    outline: 'none'
                                }}
                            >
                                Become a Talent
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        height: 250,
                        marginTop: 10,
                        borderRadius: 5,
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            padding: 10
                        }}
                    >
                        <p style={{fontSize: 18}}>Medals</p>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center'
                        }}
                    >
                        <div>
                            <img
                                src="/static/img/medals_s-18.png"
                                alt=""
                                style={{width: 110}}
                            />
                            <p style={{fontSize: 24}}>Congratulations! You are a part of MDL now!</p>
                        </div>
                    </div>

                </div>
            </Col>
        )
    }
}

export default connect()(Profile);