import { combineReducers } from 'redux';

import introDetail from 'reducers/introDetail';
import onboarding from 'reducers/onboarding';

const rootReducer = combineReducers({
    introDetail,
    onboarding: onboarding
});

export default rootReducer;
