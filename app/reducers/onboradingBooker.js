export default function(state = {actorAreas: [], modelAreas: [], dancerAreas: []}, action) {
    switch(action.type) {
        case 'SELECT_WORK_AREAS_ACTOR':
            return {...state, actorAreas: [...state.actorAreas, action.payload.toLowerCase()]};
        case 'SELECT_WORK_AREAS_DANCER':
            return {...state, dancerAreas: [...state.dancerAreas, action.payload.toLowerCase()]};
        case 'SELECT_WORK_AREAS_MODEL':
            return {...state, modelAreas: [...state.modelAreas, action.payload.toLowerCase()]};
        case 'UNSELECT_WORK_AREAS_ACTOR':
            return {...state, actorAreas: state.actorAreas.filter(elem => elem !== action.payload.toLowerCase())};
        case 'UNSELECT_WORK_AREAS_DANCER':
            return {...state, dancerAreas: state.dancerAreas.filter(elem => elem !== action.payload.toLowerCase())};
        case 'UNSELECT_WORK_AREAS_MODEL':
            return {...state, modelAreas: state.modelAreas.filter(elem => elem !== action.payload.toLowerCase())};
        case 'SUCCESS_UPDATE_BOOKER_DATA':
            return {...state, success: action.payload};
        case 'ERROR_UPDATE_BOOKER_DATA':
            return {...state, error: action.payload};
        default:
            return state
    }
}