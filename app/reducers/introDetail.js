import * as ActionType from 'actions/intro';
import _ from 'lodash'

let defaultState = {
    user: {}
};

export default function (state = defaultState, action) {
    let cloned
    switch (action.type) {
        case ActionType.LOADED_INTRO:
            cloned = _.clone(state)
            return _.merge(cloned, action.response)

        default:
            return state
    }
}
