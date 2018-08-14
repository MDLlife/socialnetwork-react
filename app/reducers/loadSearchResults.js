import * as ActionType from 'actions/search';
import _ from 'lodash'

let defaultState = {
    user: {}
};

export default function (state = defaultState, action) {
    let cloned
    switch (action.type) {
        case ActionType.LOADED_SEARCH:
            cloned = _.clone(state)
            return _.merge(cloned, action.searchResults)

        default:
            return state
    }
}
