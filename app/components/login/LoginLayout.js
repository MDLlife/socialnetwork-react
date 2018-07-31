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

                //get user
                var user = LoginStore.user;

                console.log("JWT USER, ", user);

                //validate if onboarding is complete
                if(user.registration_booker_complete || user.registration_talent_complete || user.registration_fan_complete){
                    window.location.href = "/today"
                }else {
                    //onboarding not complete, redirect general-info
                    window.location.href = "/login/general-information";
                }
            }

        }

        return <Card style={{margin: '2em'}}>
            <CardHeader title="Login transition Page"/>
            <CardText>Loading ... </CardText>
        </Card>
    }
}

export default connect()(LoginLayout)
