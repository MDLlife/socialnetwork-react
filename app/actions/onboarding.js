import superagent from 'superagent';
import users_schema from 'model/users_schema';
import validate_schema from 'model/validate_schema';

//TODO: This should be taken from config file
const url = 'https://api.mdl.live/v1';

export const SELECT_GENDER = gender => ({
    type: 'SELECT_GENDER',
    payload: gender
});

export const DATE_OF_BIRTH = date => ({
    type: 'DATE_OF_BIRTH',
    payload: date
});

export const SELECT_ETHNICITY = ethnic => ({
    type: 'SELECT_ETHNICITY',
    payload: ethnic
});

export const SELECT_LANGUAGE = lang => ({
    type: 'SELECT_LANGUAGE',
    payload: lang
});

export const REMOVE_LANGUAGE = lang => ({
    type: 'REMOVE_LANGUAGE',
    payload: lang
});

export const SELECT_WORK_AREAS = area => ({
    type: 'SELECT_WORK_AREAS',
    payload: area
});

export const REMOVE_WORK_AREAS = area => ({
    type: 'REMOVE_WORK_AREAS',
    payload: area
});

export const SELECT_WORK_NICHES = style => ({
    type: 'SELECT_WORK_NICHES',
    payload: style
});

export const REMOVE_WORK_NICHES = style => ({
    type: 'REMOVE_WORK_NICHES',
    payload: style
});

export const SELECT_FEATURES = feature => ({
    type: 'SELECT_FEATURES',
    payload: feature
});

export const REMOVE_FEATURES = feature => ({
    type: 'REMOVE_FEATURES',
    payload: feature
});

export const TOGGLE_PIERCING = toggle => ({
    type: 'TOGGLE_PIERCING',
    payload: toggle
});

export const TOGGLE_TATTOO = toggle => ({
    type: 'TOGGLE_TATTOO',
    payload: toggle
});

export const SELECT_TATTOO = tattoo => ({
    type: 'SELECT_TATTOO',
    payload: tattoo
});

export const REMOVE_TATTOO = tattoo => ({
    type: 'REMOVE_TATTOO',
    payload: tattoo
});

export const SEARCH_LANGUAGE = lang => ({
    type: 'SEARCH_LANGUAGE',
    payload: lang
});

export const REMOVE_SEARCH_LANGUAGE = lang => ({
    type: 'REMOVE_SEARCH_LANGUAGE',
    payload: lang
});

export const SELECT_BODY_TYPE = type => ({
    type: 'SELECT_BODY_TYPE',
    payload: type
});

export const TYPE_HEIGHT = type => ({
    type: 'TYPE_HEIGHT',
    payload: type
});

export const TYPE_BUST = type => ({
    type: 'TYPE_BUST',
    payload: type
});

export const TYPE_WAIST = type => ({
    type: 'TYPE_WAIST',
    payload: type
});

export const TYPE_HIPS = type => ({
    type: 'TYPE_HIPS',
    payload: type
});

export const TYPE_SHOE_SIZE = type => ({
    type: 'TYPE_SHOE_SIZE',
    payload: type
});

export const SELECT_EYE_COLOR = color => ({
    type: 'SELECT_EYE_COLOR',
    payload: color
});

export const SELECT_HAIR_COLOR = color => ({
    type: 'SELECT_HAIR_COLOR',
    payload: color
});

export const SELECT_HAIR_LENGTH = length => ({
    type: 'SELECT_HAIR_LENGTH',
    payload: length
});

// Requests to api

export const GET_USER_DATA = data => ({
    type: 'GET_USER_DATA',
    payload: data
});

export const ERROR_UPDATE_USER_DATA = error => ({
    type: 'ERROR_GET_USER_DATA',
    payload: error,
});

export const SUCCESS_UPDATE_USER_DATA = success => ({
    type: 'SUCCESS_UPDATE_USER_DATA',
    payload: success
});

export const FETCH_GET_USER_DATA = id => {
    return (dispatch) => {
        return superagent
            .get(url + `/read/users/${id}`)
            .withCredentials()
            .then(res => {
                console.log(JSON.parse(res.text))
                dispatch(GET_USER_DATA(JSON.parse(res.text)))
            })
    }
};

export const FETCH_UPDATE_USER_DATA = data => {
    const result = validate_schema.validate(data, users_schema);
    // console.log("RESULT validate -> ", result);
    if (result.error) {
        console.log("ERROR: NOT VALID, ", result, data);
        return (dispatch) => {
            dispatch(ERROR_UPDATE_USER_DATA(true))
        };
    } else {
        return dispatch => {
            return superagent
                .post(url + '/update/users')
                .send(data)
                .withCredentials()
                .then(res => {
                    console.log('Success', res);

                    //TODO:  dispatch success
                    dispatch(SUCCESS_UPDATE_USER_DATA(true))
                })
        }
    }
}

