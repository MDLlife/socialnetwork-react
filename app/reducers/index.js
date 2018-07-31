import { combineReducers } from 'redux';

import introDetail from 'reducers/introDetail';
import onboarding from 'reducers/onboarding';
import onboardingBooker from 'reducers/onboradingBooker';
import onboardingFan from 'reducers/onboardingFan';

const rootReducer = combineReducers({
    introDetail,
    onboarding: onboarding,
    onboardingBooker: onboardingBooker,
    onboardingFan: onboardingFan
});

export default rootReducer;
