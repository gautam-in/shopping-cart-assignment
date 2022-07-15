import { createStore, applyMiddleware, compose } from 'redux';

import thunk from "redux-thunk";

import rootReducer from './root-reducer';

// const INITIAL_STATE_CART = {
//     hidden: true,
//     cartItems: [],
//     categoryId: ""
// };

// const cartItemsFromStorage = localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : INITIAL_STATE_CART;

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    // cart: cartItemsFromStorage,
    userLogin: { userInfo: userInfoFromStorage },
};


const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
