import * as actionTypes from './actionTypes';

const initialState = {
    isUserLoggedIn: false,
    alert: null,
    categoryFilter: '',
    users: [],
    cart: [],
    banners: [],
    categories: [],
    products: []
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
        case actionTypes.GET_PRODUCTS_RESPONSE:
            state = {
                ...state,
                products: action.payload
            };
            break;
        case actionTypes.SET_CATEGORY_FILTER:
            state = {
                ...state,
                categoryFilter: action.payload
            };
            break;
        default:
            break;
    };
    return state;
};
export default rootReducer;