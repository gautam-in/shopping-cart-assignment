import * as types from './cart.types';

export function addItemToCart(item) {
    return {
        type: types.ADD_ITEM_CART,
        payload: item
    }
}

export function removeItemToCart(item) {
    return {
        type: types.REMOVE_ITEM_CART,
        payload: item
    }
}

export function getCartItemCount() {
    return {
        type: types.GET_ITEM_COUNT,
    }
}