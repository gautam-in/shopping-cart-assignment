import * as types from './home.types';

const INITIAL_STATE = {
    categories: []
}

export function homeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_CATEGORIES:
            return state;
        case types.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}