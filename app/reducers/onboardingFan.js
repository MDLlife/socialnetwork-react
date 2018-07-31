export default function(state = {}, action){
    switch(action.type) {
        case 'SELECT_GENDER':
            return {...state, gender: action.payload};
        case 'DATE_OF_BIRTH':
            return {
                ...state,
                dateOfBirth: action.payload,
                year: new Date().getUTCFullYear() - action.payload.getUTCFullYear()
            };
        default:
            return state;
    }
}