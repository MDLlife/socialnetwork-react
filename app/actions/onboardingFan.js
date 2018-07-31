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

export const FETCH_FAN_DATA = data => {
    const result = validate_schema.validate(data, users_schema);
    console.log("RESULT validate -> ", result);
    if (result.error) {
        console.log("NOT VALID, ", result);
        //TODO:  dispatch ERROR
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