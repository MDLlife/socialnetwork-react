import superagent from 'superagent';
import fans_schema from 'model/fans_schema';
import validate_schema from 'model/validate_schema';

import config from 'config';

const url = config.API_URL;
export const SELECT_GENDER = gender => ({
    type: 'SELECT_GENDER',
    payload: gender
});

export const DATE_OF_BIRTH = date => ({
    type: 'DATE_OF_BIRTH',
    payload: date
});

export const ERROR_UPDATE_FAN_DATA = error => ({
    type: 'ERROR_UPDATE_FAN_DATA',
    payload: error,
});

export const SUCCESS_UPDATE_FAN_DATA = success => ({
    type: 'SUCCESS_UPDATE_FAN_DATA',
    payload: success
});

export const FETCH_UPDATE_FAN_DATA = data => {
    const result = validate_schema.validate(data, fans_schema);
    console.log("RESULT validate -> ", result);
    if (result.error) {
        console.log("ERROR: FETCH_UPDATE_FAN_DATA, NOT VALID, ", result, data);
        return (dispatch) => {
            dispatch(ERROR_UPDATE_FAN_DATA(result.error))
        };
    } else {
        return dispatch => {
            return superagent
                .post(url + '/v1/update/users')
                .send(data)
                .withCredentials()
                .then(res => {
                    dispatch(SUCCESS_UPDATE_FAN_DATA(true))
                })
                .catch(err => {
                    console.log("ERROR: FETCH_UPDATE_FAN_DATA, ", err);
                    dispatch(ERROR_UPDATE_FAN_DATA(err))
                })
        }
    }
};