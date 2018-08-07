import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LoginStore from 'store/LoginStore';
import config from 'config';
import {getUser} from 'middleware/sa'

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
                if (user.registration_booker_complete || user.registration_talent_complete || user.registration_fan_complete) {
                    window.location.href = "/today"
                } else {
                    //onboarding not complete, redirect general-info ?

                    // double check with the API results
                    // console.log(user)

                    getUser(user._key, function (err, res) {

                        if (err || !res || res.body.length === 0) {
                            // err
                            console.log("ERROR: COULD NOT GET USER FROM API, DOES THIS USER EXISTS ?? WILL REDIRECT TO LOGIN");
                            setTimeout(function () {
                                window.location.href = config.API_URL + "/login";
                            }, 1000);

                        } else {
                            var usr = res.body;
                            if (usr.registration_booker_complete || usr.registration_talent_complete || usr.registration_fan_complete) {

                                console.log("After double check with API, user has already done registration, so redirect to TODAY page")
                                window.location.href = "/today"

                            } else {
                                console.log("After double check with API, user DID NOT complete registration, so redirect to general-information page")
                                window.location.href = "/login/general-information";
                            }
                        }
                    })


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
