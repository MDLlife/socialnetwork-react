import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LoginStore from 'store/LoginStore';
import config from 'config';

class LoginLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let loggedIn = LoginStore.isLoggedIn();

        if (typeof window !== 'undefined') {

            if (!loggedIn) {
                console.log("*&*&*&* User is not logged in, going to redirect to login page")


                setTimeout(function () {
                    window.location.href = config.API_URL + "/login";
                }, 1000);

            } else {
                console.log("*&*&*&* User logged in, going to redirect to next phase ", loggedIn);
                //TODO: GET from API and check if user already completed his profile, if so redirect to main page, otherwise to next steps on registration

                window.location.href = "/login/select-role";
            }

        }

        return <Card style={{margin: '2em'}}>
            <CardHeader title="Login transition Page"/>
            <CardText>Loading ... </CardText>
        </Card>
    }
}

export default connect()(LoginLayout)
