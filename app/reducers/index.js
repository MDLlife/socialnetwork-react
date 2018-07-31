import { combineReducers } from 'redux';

import introDetail from 'reducers/introDetail';
import onboarding from 'reducers/onboarding';
import onboardingBooker from 'reducers/onboradingBooker';

const rootReducer = combineReducers({
    introDetail,
    onboarding: onboarding,
    onboardingBooker: onboardingBooker
});

export default rootReducer;
