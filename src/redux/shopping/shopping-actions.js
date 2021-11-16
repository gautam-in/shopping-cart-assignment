import * as actionTypes from './shopping-types';

export const addToCart = (itemDetails) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: itemDetails
    }
}

export const incrementQuantity = (itemDetails) => {
    return {
        type: actionTypes.INCREMENT_QUANTITY,
        payload: itemDetails
    }
}

export const decrementQuantity = (itemDetails) => {
    return {
        type: actionTypes.DECREMENT_QUANTITY,
        payload: itemDetails
    }
}