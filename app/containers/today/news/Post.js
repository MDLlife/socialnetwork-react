import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'white',
                borderRadius: 5
            }}>
                <div style={{
                    padding: '20px 20px 0 20px',
                    position: 'relative'
                }}>
                    <img
                        src="http://via.placeholder.com/450x250"
                        alt=""
                        style={{
                            width: '100%',
                            height: 300,
                            borderRadius: 5,
                        }}
                    />
                    <div style={{
                        display: 'flex',
                        paddingLeft: 20,
                        position: 'absolute',
                        bottom: -30,
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{display: 'flex'}}>
                            <img
                                src="http://via.placeholder.com/48x48"
                                alt=""
                                style={{
                                    borderRadius: '50%',
                                    border: '2px solid white'
                                }}
                            />
                            <div
                                style={{
                                    paddingLeft: 10,
                                    paddingTop: 25
                                }}
                            >
                                Written by: <span style={{fontWeight: 'bolder'}}>Jack Jackson</span>
                            </div>
                        </div>
                        <div
                            style={{
                                paddingTop: 25,
                                paddingRight: 40
                            }}
                        >
                            Posted: <span style={{fontWeight: 'bolder'}}>8 hours ago</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    padding: 20,
                }}>
                    <h2>News name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam obcaecati recusandae unde veritatis voluptatibus.
                        Dolorum ea, eum excepturi facere fugit inventore ipsum
                        nihil nobis optio porro possimus quod, quos voluptatem.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        color: '#ff3399',
                    }}>
                       <span
                           style={{cursor: 'pointer'}}
                       >
                        Read more &rarr;
                    </span>
                    </div>

                </div>
                <div style={{
                    display: 'flex',
                    padding: 20,
                    borderTop: '1px solid lightgrey',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div className='post-social-icons'>
                        <img
                            src="/static/img/twitter (1).svg"
                            alt=""
                            style={{
                                width: 24
                            }}
                        />
                        <img
                            src="/static/img/linkedin-button.svg"
                            alt=""
                            style={{marginLeft: 10, width: 24}}
                        />
                        <img
                            src="/static/img/facebook-logo-button.svg"
                            alt=""
                            style={{marginLeft: 10, width: 24}}
                        />
                    </div>
                    <div
                        className='post-action-icons'
                        style={{display: 'flex', alignItems: 'center'}}
                    >
                        <div style={{
                            marginRight: 20
                        }}>
                            <img
                                src="/static/img/outline-visibility-24px.svg"
                                alt=""
                                style={{
                                    marginRight: 5,
                                    width: 24
                                }}
                            />
                            <span>
                                13
                            </span>
                        </div>
                        <div>
                            <img
                                src="/static/img/favorite.svg"
                                alt=""
                                style={{
                                    marginRight: 5,
                                    width: 21,
                                    borderRadius: 0
                                }}
                            />
                            <span>
                                12
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Post);