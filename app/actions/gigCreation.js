export const SET_TYPE = (data, role) => ({
    type: 'SET_TYPE',
    index: data, // contain index, person, gender, age, ethnicity
    role: role, // talent type
});

export const DELETE_TYPE = (index, role) => ({
    type: 'DELETE_TYPE',
    index: index.toString(),
    role: role
});

export const SELECT_TYPE_GIG = type => ({
    type: 'SELECT_TYPE_GIG',
    payload: type
});

export const SELECT_ADDRESS = address => ({
    type: 'SELECT_ADDRESS',
    payload: address
});

export const SELECT_LANGUAGE = lang => ({
    type: 'SELECT_LANGUAGE',
    payload: lang
});

export const REMOVE_LANGUAGE = lang => ({
    type: 'REMOVE_LANGUAGE',
    payload: lang
});

export const SEARCH_LANGUAGE = lang => ({
    type: 'SEARCH_LANGUAGE',
    payload: lang
});

export const REMOVE_SEARCH_LANGUAGE = lang => ({
    type: 'REMOVE_SEARCH_LANGUAGE',
    payload: lang
});

export const ONE_DAY_DURATION = day => ({
    type: 'ONE_DAY_DURATION',
    payload: day
});

export const FROM_DURATION = from => ({
    type: 'FROM_DURATION',
    from: from,
});

export const TO_DURATION = to => ({
    type: 'TO_DURATION',
    to: to
});

export const SET_PERSON_COUNT = (person, index, role) => ({
    type: 'SET_PERSON_COUNT',
    person: person,
    index: index,
    role: role
});

export const SET_ETHNICITY_TYPE = (ethnic, index, role) => ({
    type: 'SET_ETHNICITY_TYPE',
    ethnicity: ethnic,
    index: index,
    role: role
});
