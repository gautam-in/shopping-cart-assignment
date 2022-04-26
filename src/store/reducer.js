import * as actionTypes from './actionTypes';
import {cartItemUpdaterTypes} from '../utils/constants';

const initialState = {
    isUserLoggedIn: false,
    alert: null,
    categoryFilter: '',
    showCartModalView: false,
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
                products: action.payload,
            };
            break;
        case actionTypes.SET_CATEGORY_FILTER:
            state = {
                ...state,
                categoryFilter: state.categoryFilter === action.payload ? '' : action.payload
            };
            break;
        case actionTypes.ADD_ITEM_TO_CART_RESPONSE:
            state = {
                ...state,
                cart: action.payload
            };
            break;
        case actionTypes.TOGGLE_CART_MODAL_VIEW:
            state = {
                ...state,
                showCartModalView: !state.showCartModalView
            };
            break;
        case actionTypes.UPDATE_CART_QUANTITY_BY_PRODUCT:
            const { productId, updaterType } = action.payload;

            const updatedCartItems = [...state.cart];
            const cartItemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === productId);
            const cartItem = updatedCartItems[cartItemIndex];

            if (updaterType === cartItemUpdaterTypes.INCREMENT)
                cartItem.quantity += 1;
            else if (updaterType === cartItemUpdaterTypes.DECREMENT)
                cartItem.quantity -= 1;

            if(cartItem.quantity === 0)
                updatedCartItems.splice(cartItemIndex, 1);

            state = {
                ...state,
                cart: updatedCartItems
            };
            break;
        default:
            break;
    };
    return state;
};
export default rootReducer;