import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class LoginLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (typeof window !== 'undefined') {

            localStorage.setItem("jv_jwt", null);

            console.log("*&*&*&* Process logout page");

            setTimeout(function(){

                window.location.href = "/login";
            },1000)

        }


        return <Card style={{margin: '2em'}}>
            <CardHeader title="Logout Page"/>
            <CardText>Loading ... </CardText>
        </Card>
    }
}

export default connect()(LoginLayout);