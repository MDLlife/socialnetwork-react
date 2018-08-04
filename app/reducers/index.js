import { combineReducers } from 'redux';

import introDetail from 'reducers/introDetail';
import onboarding from 'reducers/onboarding';
import onboardingBooker from 'reducers/onboradingBooker';
import onboardingFan from 'reducers/onboardingFan';
import articles from 'reducers/articles';

const rootReducer = combineReducers({
    introDetail,
    onboarding,
    onboardingBooker,
    onboardingFan,
    articles,

});

export default rootReducer;
