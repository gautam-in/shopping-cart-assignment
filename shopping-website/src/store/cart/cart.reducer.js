import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    cartItems: [],
    isCartLoading: true,
    isOpen: false
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_DATA:
            return {...state, cartItems: payload, isCartLoading: false}
        case CART_ACTION_TYPES.SET_CART_TOGGLE:
            return {...state, isOpen: !state.isOpen}
        default:
            return state;
    }
}