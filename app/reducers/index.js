import { combineReducers } from 'redux';

import introDetail from 'reducers/introDetail';
import onboarding from 'reducers/onboarding';
import onboardingBooker from 'reducers/onboradingBooker';
import onboardingFan from 'reducers/onboardingFan';
import articles from 'reducers/articles';
import analytics from 'reducers/analytics';
import loadSearchResults from 'reducers/loadSearchResults'

const rootReducer = combineReducers({
    introDetail,
    onboarding,
    onboardingBooker,
    onboardingFan,
    articles,
    analytics,
    loadSearchResults,

});

export default rootReducer;
