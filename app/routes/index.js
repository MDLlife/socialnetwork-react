import React from 'util/safe-react';
import {IndexRoute, Route, Router} from 'react-router';

import MainLayout from 'containers/main/Master';

import LoginLayout from 'containers/login/Master';
import TodayLayout from 'containers/today/Master';

import OnboardingLayout from 'containers/onboarding/Master';
import GigLayout from 'containers/gig/Master';

import Main from 'containers/main/Main';
import ActivateAccount from 'containers/login/ActivateAccount';
import EmailConfirmation from 'containers/login/EmailConfirmation.js';
import SelectRole from 'containers/login/SelectRole';
import BookerRole from 'containers/login/BookerRole';
import TalentRole from 'containers/login/TalentRole';
import SelectTalents from 'containers/login/SelectTalents';
import GeneralInformation from 'containers/login/GeneralInformation';
import Onboarding from 'containers/onboarding/OnboardingSteps';
import OnboardingFan from 'containers/onboarding/OnboardingFan';
import OnboardingBooker from 'containers/onboarding/OnboardingBooker';
import GigSteps from 'containers/gig/GigSteps';

import ProfilePreview from 'containers/onboarding/ProfilePreview';

import TodayContainer from 'containers/today/TodayContainer';
import FullPost from 'containers/today/FullPost';

import Notfound from 'containers/Notfound';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LoginStore from 'store/LoginStore';
import login from 'components/login/LoginLayout'
import logout from 'components/login/LogoutLayout'

import Search from 'containers/search/SearchComponent';

import Messager from 'containers/today/messager/Messager';

injectTapEventPlugin();

export default function (history) {

    /**
     * Checks authentication status on route change
     * @param  {object}   nextState The state we want to change into when we change routes
     * @param  {function} replace Function provided by React Router to replace the location
     */
    function checkAuth(nextState, replace) {
        if (typeof window !== 'undefined') {

            let loggedIn = LoginStore.isLoggedIn();

            // Check if the path isn't login. That way we can apply specific logic to
            // display/render the path we want to
            if (nextState.location.pathname === '/login') {
                console.log("*&*&*&* Process login page");

            } else if (!loggedIn) {

                console.log("*&*&*&* NOT LOGGED IN, Will redirect to login page");
                replace('/login');
            } else {

                console.log("*&*&*&* User auth ok, allow route -> ", LoginStore.user);
            }
        }
    }

    return (
        <Router history={history}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Main}/>

                <Route path="/logout" component={LoginLayout}>
                    <IndexRoute component={logout}/>
                    <Route path="*" component={Notfound}/>
                </Route>

                <Route path="/search" component={TodayLayout}>
                    <IndexRoute component={Search}/>
                </Route>

                <Route path="/login" component={LoginLayout}>
                    <IndexRoute component={login}/>

                    <Route path="activate-account" component={ActivateAccount}/>
                    <Route path="email-confirmation" component={EmailConfirmation}/>
                    <Route path="select-role" component={SelectRole} onEnter={checkAuth}/>
                    <Route path="booker-role" component={BookerRole} onEnter={checkAuth}/>
                    <Route path="talent-role" component={TalentRole} onEnter={checkAuth}/>

                    <Route path="select-talents" component={SelectTalents} onEnter={checkAuth}/>
                    <Route path="general-information" component={GeneralInformation} onEnter={checkAuth}/>

                    <Route path="*" component={Notfound}/>
                </Route>

                <Route path='/onboarding' component={OnboardingLayout} onEnter={checkAuth}>
                    <IndexRoute component={Onboarding}/>
                    <Route path='fan' component={OnboardingFan}/>
                    <Route path='booker' component={OnboardingBooker}/>

                    <Route path='profile-preview' component={ProfilePreview}/>
                    <Route path="*" component={Notfound}/>
                </Route>

                <Route path='/today' component={TodayLayout}>
                    <IndexRoute component={TodayContainer}/>
                    <Route path="me/:index" component={TodayContainer} onEnter={checkAuth}/>

                    <Route path="news/:id" component={FullPost}/>
                    <Route path="news/:index/:value" component={TodayContainer}/>

                    <Route path="messager" component={TodayContainer}/>

                    <Route path="calendar" component={TodayContainer}/>

                    <Route path="payment" component={TodayContainer}/>

                    <Route path="*" component={Notfound}/>
                </Route>

                <Route path='/gig-creation' component={GigLayout}>
                    <IndexRoute component={GigSteps}/>
                    <Route path="*" component={Notfound}/>
                </Route>

                <Route path="*" component={Notfound}/>
            </Route>
            <Route path="*" component={Notfound}/>
        </Router>
    );
};