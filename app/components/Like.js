'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import config from 'config'
import $ from 'jquery'
import _ from 'lodash'
import LoginStore from 'store/LoginStore';

var host = config.COMENTARISMO_URL;
var analytics = require('ga-browser')();

class Like extends Component {

    constructor() {
        super()
        this.state = {
            liked: false
        }

        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        analytics('create', 'UA-51773618-1', 'auto');

        if (this.props.forceUpdate) {
            // reload src to force onerror to be called if image link was not valid
            //this.getDOMNode().src = this.props.src;
            this.forceUpdate();
        }


    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
        ga('send', 'event', 'like', window.location.href, {}, 0);

        //http on comentarismo api and properly like this comment :D
        var request = $.ajax({
            url: `${host}/auth/like/${this.props.id}?table=news&db=comentarismo`,
            type: 'post',
            xhrFields: {
                withCredentials: true
            }
        });

        request.done(function (data, textStatus, jqXHR) {
            console.log("success");
            $(".error").hide();
            $(".success").html(jqXHR.statusText);
            //redirect to next comment
        });

        request.fail(function (jqXHR) {

            if (jqXHR.status === "200") {
                $(".error").hide();
                $(".success").html(jqXHR.statusText);
                console.log("success");
                return;
            } else if (jqXHR.status === "406") {
                $(".success").hide();
                $(".error").html(jqXHR.status + " " + jqXHR.statusText + " You can only vote 1 time per comment ");
                $(".error").show();
                //only one voting
                console.log("only one voting");
                //redirect to next comment

                return;
            } else if (jqXHR.status === "404") {

            }

            $(".success").hide();
            $(".error").html(jqXHR.status + " " + jqXHR.statusText + ` ... Something bad happened, are you logged in ?? <a href='${host}/login'>Login</a> `);
            $(".error").show();
            $(".error").focus();

        });

    }

    componentWillReceiveProps() {

        $(".error").hide();
        $(".success").hide();

    }

    render() {
        const userId = LoginStore.user && LoginStore.user.username ? LoginStore.user.username : '';
        var liked = _.contains(this.props.likes, userId);
        console.log(this.props.likes, userId);

        var likeImg = liked ? "/static/img/favorite fill.svg" : "/static/img/favorite.svg";
        var likes = this.props.likes ? this.props.likes.length : 0;

        return (<div onClick={this.handleClick}>
                <img src={likeImg}
                     style={{
                         marginRight: 5,
                         width: 21,
                         borderRadius: 0
                     }}/>
                <span>{likes}</span>
            </div>
        );
    }
}

Like.propTypes = {
    likes: PropTypes.array.isRequired,
};

export default Like