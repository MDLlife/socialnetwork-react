import React from 'util/safe-react';
import {Router, Route, IndexRoute} from 'react-router';

import Login from 'containers/Login';
import SocialLogin from 'containers/SocialLogin';
import LoginLayout from 'containers/login/Master';
import Notfound from 'containers/Notfound';



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function (history) {
    return (
        <Router history={history}>
            <Route path="/" component={LoginLayout}>
                <IndexRoute component={Login}/>
                <Route path='/social' component={SocialLogin} />
                <Route path="*" component={Notfound}/>
            </Route>
        </Router>
    );
};