import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import $ from 'jquery';

class LoginLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (typeof window !== 'undefined') {

            localStorage.setItem("jv_jwt", null);

            console.log("*&*&*&* Process logout page");


            var request = $.ajax({
                url: "/logout",
                type: 'get',
                xhrFields: {
                    withCredentials: true
                }
            });

            console.log("POST signup email ")

            request.done(function (data, textStatus, jqXHR) {

                if (jqXHR.status === 200) {
                    console.log("LOGOUT BACKEND OK");
                } else if (jqXHR.status === 400) {
                    console.log("LOGOUT BACKEND FAIL");
                } else if (jqXHR.status === 406) {
                    //show err
                    console.log("LOGOUT BACKEND FAIL");
                }

                setTimeout(function () {

                    window.location.href = "/login";
                }, 500)

            });
            request.fail(function (jqXHR) {
                if (jqXHR.status === 200) {
                    console.log("LOGOUT BACKEND OK");
                } else if (jqXHR.status === 400) {
                    console.log("LOGOUT BACKEND FAIL");
                } else if (jqXHR.status === 406) {
                    //show err
                    console.log("LOGOUT BACKEND FAIL");
                }

                setTimeout(function () {

                    window.location.href = "/login";
                }, 500)
            });

        }


        return <Card style={{margin: '2em'}}>
            <CardHeader title="Logout Page"/>
            <CardText>Loading ... </CardText>
        </Card>
    }
}

export default connect()(LoginLayout);