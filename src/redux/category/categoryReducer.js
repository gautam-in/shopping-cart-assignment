import { categoryActionTypes } from "./categoryActionTypes";

const INITIAL_STATE = {
    categories: [],
}

export const categoryReducer = ( state = INITIAL_STATE , action ) => {
    switch ( action.type ) {
        case categoryActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        default: 
            return state;
    }
}