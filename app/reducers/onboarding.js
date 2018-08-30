export default function (state = {language_spoken: [], work_areas: [], style: [], tattoo_where: [], search_language: []}, action) {
    switch (action.type) {
        case 'SELECT_GENDER':
            return {...state, gender: action.payload};
        case 'DATE_OF_BIRTH':
            return {
                ...state,
                dateOfBirth: action.payload,
                year: new Date().getUTCFullYear() - action.payload.getUTCFullYear()
            };
        case 'SELECT_ETHNICITY':
            return {...state, ethnic: action.payload};
        case 'SELECT_LANGUAGE':
            return {...state, language_spoken: [...state.language_spoken, action.payload ? action.payload.toLowerCase() : '']};
        case 'SEARCH_LANGUAGE':
            return {...state, search_language: [...state.search_language, {key: action.payload, label: action.payload}]};
        case 'REMOVE_SEARCH_LANGUAGE':
            return {...state, search_language: state.search_language.filter(elem => elem.label !== action.payload)};
        case 'REMOVE_LANGUAGE':
            return {...state, language_spoken: state.language_spoken.filter(elem => elem !== action.payload)};
        case 'SELECT_WORK_AREAS':
            return {...state, work_areas: [...state.work_areas, action.payload]};
        case 'REMOVE_WORK_AREAS':
            return {...state, work_areas: state.work_areas.filter(elem => elem !== action.payload)};
        case 'SELECT_WORK_NICHES':
            return {...state, style: [...state.style, action.payload]};
        case 'REMOVE_WORK_NICHES':
            return {...state, style: state.style.filter(elem => elem !== action.payload)};
        case 'SELECT_FEATURES':
            return {...state, features: [...state.features, action.payload]};
        case 'REMOVE_FEATURES':
            return {...state, features: state.features.filter(elem => elem !== action.payload)};
        case 'TOGGLE_PIERCING':
            return {...state, piercing: action.payload};
        case 'TOGGLE_TATTOO':
            return {...state, tattoo: action.payload};
        case 'SELECT_TATTOO':
            return {...state, tattoo_where: [...state.tattoo_where, action.payload]};
        case 'REMOVE_TATTOO':
            return {...state, tattoo_where: state.tattoo_where.filter(elem => elem !== action.payload)};
        case 'SELECT_BODY_TYPE':
            return {...state, body_type: action.payload};
        case 'TYPE_HEIGHT':
            return {...state, height: action.payload};
        case 'TYPE_BUST':
            return {...state, bust: action.payload};
        case 'TYPE_WAIST':
            return {...state, waist: action.payload};
        case 'TYPE_HIPS':
            return {...state, hips: action.payload};
        case 'TYPE_SHOE_SIZE':
            return {...state, shoe_size: action.payload};
        case 'SELECT_EYE_COLOR':
            return {...state, eye_color: action.payload};
        case 'SELECT_HAIR_COLOR':
            return {...state, hair_color: action.payload};
        case 'SELECT_HAIR_LENGTH':
            return {...state, hair_length: action.payload};
        case 'GET_USER_DATA':
            return {...state, user_data: action.payload};
        case 'SUCCESS_UPDATE_USER_DATA':
            return {...state, success: action.payload};
        case 'ERROR_UPDATE_USER_DATA':
            return {...state, error: action.payload};
        default:
            return state;
    }
}
