export default function(state = {
    'Actor': {types: {
         1: {}
    }},
    'Model': {types: {
         1: {}
    }},
    'Dancer': {types: {
        1: {}
    }},
    'Singer': {types: {
        1: {}
    }},
    'Musician': {types: {
        1: {}
    }},
    'Animator & Entertainer': {types: {
        1: {}
    }},
    'DJ': {types: {
        1: {}
    }},
    'Host & MC': {types: {
        1: {}
    }},
    'Other': {types: {
        1: {}
    }},
    'search_language': [],
    'language_spoken': []
}, action) {
    switch(action.type) {
        case "SET_TYPE":
            return {...state,
                [action.role]: {
                    ...state[action.role],
                    types: {
                        ...state[action.role].types,
                        [action.index]: {}
                    }
                }
            };
        case "DELETE_TYPE":
            const removeProperty = (obj, property) => {
                return  Object.keys(obj).reduce((acc, key) => {
                    if (key !== property) {
                        return {...acc, [key]: obj[key]}
                    }
                    return acc;
                }, {})
            };

            return {...state,
                [action.role]: {
                    ...state[action.role],
                    types: removeProperty(state[action.role].types, action.index)
                }
            };
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
        case 'SET_PERSON_COUNT':
            return {...state,
                [action.role]: {
                    types: {
                        ...state[action.role].types,
                        [action.index]: { ...state[action.role].types[action.index], person: action.person}
                    }
                }};
        case 'SET_ETHNICITY_TYPE':
            return {...state,
                [action.role]: {
                    types: {
                        ...state[action.role].types,
                        [action.index]: {...state[action.role].types[action.index], ethnicity: action.ethnicity}
                    }
                }};
        default:
            return state
    }
}