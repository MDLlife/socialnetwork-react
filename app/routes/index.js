import React from 'util/safe-react';
import {Router, Route, IndexRoute} from 'react-router';

import MainLayout from 'containers/main/Master';
import LoginLayout from 'containers/login/Master';

import Main from 'containers/Main';
import SocialLogin from 'containers/SocialLogin';
import ActivateAccount from 'containers/ActivateAccount';
import EmailConfirmation from 'containers/EmailConfirmation.js';
import SelectRole from 'containers/SelectRole';
import BookerRole from 'containers/BookerRole';
import TalentRole from 'containers/TalentRole';
import SelectTalents from 'containers/SelectTalents';
import GeneralInformation from 'containers/GeneralInformation';

import Notfound from 'containers/Notfound';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function (history) {
    return (
        <Router history={history}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Main}/>
            </Route>

            <Route path="/login" component={LoginLayout}>
                <IndexRoute component={SocialLogin}/>
                <Route path="/activate-account" component={ActivateAccount}/>
                <Route path="/email-confirmation" component={EmailConfirmation}/>
                <Route path="/select-role" component={SelectRole}/>
                <Route path="/booker-role" component={BookerRole}/>
                <Route path="/talent-role" component={TalentRole}/>
                <Route path="/select-talents" component={SelectTalents}/>
                <Route path="/general-information" component={GeneralInformation}/>
                <Route path="*" component={Notfound}/>
            </Route>
        </Router>
    );
};