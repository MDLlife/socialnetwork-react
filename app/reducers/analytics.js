import * as ActionType from 'actions/analytics';

function analyticsReducer(state = [], action) {
    switch (action.type) {
        case ActionType.LOADED_ANALYTICS_DETAIL:
            return action.response;
            break;
        default:
            return state;
    }
}

export default analyticsReducer;
