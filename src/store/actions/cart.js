import * as actionTypes from "./actionTypes"
export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product: product
    }
}

export const incrementProduct = (product) => {
    return {
        type: actionTypes.INCREMENT_ITEM,
        product: product
    }
}
export const decrementProduct = (product) => {
    return {
        type: actionTypes.DECREMENT_ITEM,
        product: product
    }
}

export const showCart = (show) => {
    return {
        type: actionTypes.SHOW_CART,
        show: show
    }
}