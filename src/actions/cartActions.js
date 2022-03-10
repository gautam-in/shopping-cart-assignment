import { ADD_PRODUCT, DECREASE_QUANTITY, REMOVE_PRODUCT } from './types';

export const addProductToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_PRODUCT,
        payload: product
    })
};

export const removeProductFromCart = (productId) => (dispatch) => {
    dispatch({
        type: REMOVE_PRODUCT,
        payload: productId
    })
};

export const decreaseQuantity = (productId) => (dispatch) => {
    dispatch({
        type: DECREASE_QUANTITY,
        payload: productId
    })
}