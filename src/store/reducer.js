import * as actionTypes from './actionTypes';

const initialState = {
    isUserLoggedIn: false,
    alert: null,
    users: [],
    cart: [],
    banners: [],
    categories: []
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
        case actionTypes.GET_BANNERS_AND_CATEGORIES_RESPONSE:
            const { banners, categories } = action.payload;

            state = {
                ...state,
                banners,
                categories
            };
            break;
        default:
            break;
    };
    return state;
};
export default rootReducer;