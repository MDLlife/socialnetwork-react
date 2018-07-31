import superagent from 'superagent';
import users_schema from 'model/users_schema';
import validate_schema from 'model/validate_schema';

//TODO: This should be taken from config file
const url = 'https://api.mdl.live/v1';

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

export const FETCH_BOOKER_DATA = data => {
    const result = validate_schema.validate(data, users_schema);
    console.log("RESULT validate -> ", result);
    if (result.error) {
        console.log("NOT VALID, ", result);
        return (dispatch) => {};
    } else {
        return dispatch => {
            return superagent
                .post(url + '/update/users')
                .send(data)
                .withCredentials()
                .then(res => {
                    console.log('Success', res);
                    //TODO:  dispatch success
                })
        }
    }
};