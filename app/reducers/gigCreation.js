export default function(state = {
    talents: {
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
            }}
    },
    'search_language': [],
    'language_spoken': []
}, action) {
    switch(action.type) {
        case "SET_TYPE":
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {}
                        }
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
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: removeProperty(state[action.role].types, action.index)
                    }
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
            return {...state, from: action.payload, to: action.payload};
        case 'FROM_DURATION':
            return {...state, from: action.from};
        case 'TO_DURATION':
            return {...state, to: action.to};
        case 'SET_LOCATION_GIG':
            return {...state, city: action.city};
        case 'SET_PERSON_COUNT':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                quantity: action.person
                            }
                        }
                    }
                }
            };
        case 'SET_ETHNICITY_TYPE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                ethnicity: action.ethnicity
                            }
                        }
                    }
                }
            };
        case 'SET_GENDER_TYPE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                gender: action.gender
                            }
                        }
                    }
                }
            };
        case 'SET_AGE_TYPE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                age: action.age
                            }
                        }
                    }
                }
            };
        case 'SET_OVERTIME_TYPE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                overtime_payment: action.overtime,
                            }
                        }
                    }
                }
            };
        // case 'SET_PAYMENT_TYPE':
        //     return {...state,
        //         talents: {
        //             ...state.talents,
        //             [action.role]: {
        //                 ...state.talents[action.role],
        //                 types: {
        //                     ...state.talents[action.role].types,
        //                     [action.index]: {
        //                         ...state.talents[action.role].types[action.index],
        //                         payment: action.payment,
        //                     }
        //                 }
        //             }
        //         }
        //     };
        case 'SET_GIG_RATE_TYPE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                payment_gig: action.gigRate,
                                payment_hour: 0,
                                payment_visible: false
                            }
                        }
                    }
                }
            };
        case 'SET_HOUR_RATE_TYPE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                payment_hour: action.hourRate,
                                payment_gig: 0,
                                payment_visible: false
                            }
                        }
                    }
                }
            };
        case 'SET_PAYMENT_VISIBLE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                payment_visible: action.paymentVisible,
                            }
                        }
                    }
                }
            };
        case 'SET_OVERTIME_VISIBLE':
            return {...state,
                talents: {
                    ...state.talents,
                    [action.role]: {
                        ...state.talents[action.role],
                        types: {
                            ...state.talents[action.role].types,
                            [action.index]: {
                                ...state.talents[action.role].types[action.index],
                                overtime_payment_visible: action.overtimeVisible,
                            }
                        }
                    }
                }
            };
        default:
            return state
    }
}