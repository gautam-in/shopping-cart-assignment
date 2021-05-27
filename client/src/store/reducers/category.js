import { SET_ACTIVE_CATEGORY } from '../actionTypes';

const initialState = null;

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CATEGORY:
            state = action.payload.category
            return state;
        default:
            return state;
    }
}