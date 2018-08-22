export default function(state = {
    'Actor': {count: 1, types: []},
    'Model': {count: 1, types: []},
    'Dancer': {count: 1, types: []},
    'Singer': {count: 1, types: []},
    'Musician': {count: 1, types: []},
    'Animator & Entertainer': {count: 1, types: []},
    'DJ': {count: 1, types: []},
    'Host & MC': {count: 1, types: []},
    'Other': {count: 1, types: []},
    'search_language': [],
    'language_spoken': []
}, action) {
    switch(action.type) {
        case "SET_TYPE":
            return {...state, [action.role]: {
                    count: action.count,
                    types: [...state[action.role].types, action.payload]
            }};
        case "DELETE_TYPE":
            return {...state, [action.role]: {
                count: action.count
            }};
        case "SELECT_TYPE_GIG":
            return {...state, type: action.payload};
        case "SELECT_ADDRESS":
            return {...state, address: action.payload};
        case 'SELECT_LANGUAGE':
            return {...state, language_spoken: [...state.language_spoken, action.payload]};
        case 'REMOVE_LANGUAGE':
            return {...state, language_spoken: state.language_spoken.filter(elem => elem !== action.payload)};
        case 'SEARCH_LANGUAGE':
            return {...state, search_language: [...state.search_language, {key: action.payload, label: action.payload}]};
        case 'REMOVE_SEARCH_LANGUAGE':
            return {...state, search_language: state.search_language.filter(elem => elem.label !== action.payload)};
        case 'ONE_DAY_DURATION':
            return {...state, day: action.payload};
        case 'FROM_DURATION':
            return {...state, from: action.from};
        case 'TO_DURATION':
            return {...state, to: action.to};
        default:
            return state
    }
}