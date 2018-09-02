import superagent from 'superagent';
import users_schema from 'model/users_schema';
import validate_schema from 'model/validate_schema';

import config from 'config';
const url = config.API_URL;

export const SELECT_WORK_AREAS_ACTOR = area => ({
    type: 'SELECT_WORK_AREAS_ACTOR',
    payload: area
});

export const SELECT_WORK_AREAS_MODEL = area => ({
    type: 'SELECT_WORK_AREAS_MODEL',
    payload: area
});

export const SELECT_WORK_AREAS_DANCER = area => ({
    type: 'SELECT_WORK_AREAS_DANCER',
    payload: area
});

export const UNSELECT_WORK_AREAS_ACTOR = area => ({
    type: 'UNSELECT_WORK_AREAS_ACTOR',
    payload: area
});

export const UNSELECT_WORK_AREAS_MODEL = area => ({
    type: 'UNSELECT_WORK_AREAS_MODEL',
    payload: area
});

export const UNSELECT_WORK_AREAS_DANCER = area => ({
    type: 'UNSELECT_WORK_AREAS_DANCER',
    payload: area
});

export const ERROR_UPDATE_BOOKER_DATA = error => ({
    type: 'ERROR_UPDATE_BOOKER_DATA',
    payload: error,
});

export const SUCCESS_UPDATE_BOOKER_DATA = success => ({
    type: 'SUCCESS_UPDATE_BOOKER_DATA',
    payload: success
});


export const FETCH_UPDATE_BOOKER_DATA = data => {
    const result = validate_schema.validate(data, users_schema);
    console.log("RESULT validate -> ", result);
    if (result.error) {
        console.log("ERROR: NOT VALID, ", result, data);
        return (dispatch) => {
            dispatch(ERROR_UPDATE_BOOKER_DATA(result.error))
        };
    } else {
        return dispatch => {
            return superagent
                .post(url + '/v1/update/users')
                .send(data)
                .withCredentials()
                .then(res => {
                    console.log('Success', res);
                    //TODO:  dispatch success
                     //TODO:  dispatch success
                    dispatch(SUCCESS_UPDATE_BOOKER_DATA(true))
                })
                .catch(err =>{
                    dispatch(ERROR_UPDATE_BOOKER_DATA(err))
                })
        }
    }
};