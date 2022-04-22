import * as actionTypes from './actionTypes';

const initialState = {
    isUserLoggedIn: false,
    cart: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USER_LOGGED_IN_STATUS:
            state = {
                ...state,
                isUserLoggedIn: action.payload
            };
            break;
    };
    return state;
};
export default rootReducer;