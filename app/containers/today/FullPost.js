import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import {loadArticleDetail} from 'actions/articles'
import PropTypes from 'prop-types';
import Date from "components/Date"

import Avatar from 'material-ui/Avatar';

var $ = require('jquery');
var md5 = require('md5');
var base64Encode = require("util/imgresizer").base64Encode;

var width = "450";
var height = "250";
var quality = "50";

class FullPost extends Component {
    static fetchData({store, params}) {
        let {id} = params
        return store.dispatch(loadArticleDetail({id}))
    }

    componentDidMount() {
        let {id} = this.props.params
        if (typeof window !== 'undefined' && !this.props.article || !this.props.article.operator) {
            console.log("ERROR: COULD NOT HYDRATE REACT STATE, WILL RETRY on client-side")
            this.props.loadArticleDetail({id})
        }
    }

    getImageElement() {

        if (typeof window !== 'undefined') {

            var src;

            // use meta:og image if available
            if (this.props.article.content && this.props.article.content.image) {
                src = this.props.article.content.image;
            }

            // use default image if meta:og is missing
            if (!src && this.props.article.image) {
                src = this.props.article.image;
            }

            var id = this.props.article.id;

            var host = "https://img.comentarismo.com/r";
            // console.log("IMGRESIZER ",src)
            //do img resize
            var request = $.ajax({
                url: host + '/img/',
                type: 'post',
                data: {
                    url: src,
                    width: width,
                    height: height,
                    quality: quality
                },
                mimeType: "text/plain; charset=x-user-defined"
            });
            request.done(function (binaryData) {
                if (binaryData && binaryData !== "") {
                    //console.log("imgresizer DONE OK");
                    var base64Data = base64Encode(binaryData);
                    src = "data:image/jpeg;base64," + base64Data;
                    $("#" + id).attr("src", "data:image/jpeg;base64," + base64Data);
                } else {
                    // $("#fb-"+id).show();
                    // $("#img-"+id).hide();

                    $("#" + id).attr("src", "http://via.placeholder.com/450x250");

                    //
                }
            });

            request.fail(function (e) {
                //    console.log(e);
                // $("#fb-"+id).show();
                // $("#img-"+id).hide();
                $("#" + id).attr("src", "http://via.placeholder.com/450x250");
            });
        }

    }

    goBack() {
        window.location.href = '/today'
    }

    render() {
        let {article} = this.props
        if (!article || !article.operator) {
            //TODO: redirect to 404 page ? show error page ?
        }
        return (
            <Grid style={{
                marginTop: 20,
                marginBottom: 50
            }}>
                <Row>
                    <Col xs={2}>
                        <span
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                            onClick={this.goBack}
                        >
                            &larr; Back
                        </span>
                    </Col>
                    <Col xs={8}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: 5
                        }}>
                            <div style={{
                                padding: '20px 20px 0 20px',
                                position: 'relative'
                            }}>
                                <div id={"img-" + this.props.article.id} className="">
                                    <img src="http://via.placeholder.com/450x250" id={this.props.article.id} style={{
                                        width: '100%',
                                        height: 300,
                                        borderRadius: 5,
                                    }}/>
                                    {this.getImageElement()}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    paddingLeft: 20,
                                    position: 'absolute',
                                    bottom: -30,
                                    width: '100%',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{display: 'flex'}}>
                                        <Avatar src={this.props.article.author_avatarurl} size={48} style={{
                                            borderRadius: '50%',
                                            border: '2px solid white'
                                        }}/>
                                        <div
                                            style={{
                                                paddingLeft: 10,
                                                paddingTop: 25
                                            }}
                                        >
                                            Written by: <span
                                            dangerouslySetInnerHTML={{__html: article && article.author}}
                                            style={{fontWeight: 'bolder'}}/>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: 25,
                                            paddingRight: 40
                                        }}
                                    >
                                        Posted: <span style={{fontWeight: 'bolder'}}><Date
                                        date={this.props.article.date}/></span>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                padding: 20,
                            }}>
                                <h2 dangerouslySetInnerHTML={{__html: article && article.title}}/>
                                <div id='content'
                                     dangerouslySetInnerHTML={{__html: article && article.resume}}/>
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
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {article: state.articles}
}

FullPost.propTypes = {
    article: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {loadArticleDetail})(FullPost)