import * as types from './products.types';

export function getProducts(categoryId) {
    return {
        type: types.GET_PRODUCTS,
        payload: {
            categoryId
        }
    }
}

export function setProducts(products) {
    return {
        type: types.SET_PRODUCTS,
        payload: products
    }
}