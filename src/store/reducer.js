import * as actionTypes from './actionTypes';

const initialState = {
    isUserLoggedIn: false,
    alert: null,
    users: [],
    cart: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_LOGGED_IN_STATUS:
            state = {
                ...state,
                isUserLoggedIn: action.payload
            };
            break;
        case actionTypes.REGISTER_USER_RESPONSE:
            state = {
                ...state,
                users: action.payload,
                isUserLoggedIn: true
            };
            break;
        case actionTypes.LOGIN_USER_RESPONSE:
            state = {
                ...state,
                isUserLoggedIn: true
            };
            break;
        default:
            break;
    };
    return state;
};
export default rootReducer;