import * as types from './actionTypes'


export const updateCart = (payload = null) => {

    return {
        type: types.UPDATE_CART_ITEM,
        payload: payload,
    };
};

export const removeCart = (payload = null) => {
    return {
        type: types.REMOVE_CART_ITEM,
        payload: payload,
    };
};
export const setFilter = (payload = null) => {
    return {
        type: types.SET_FILTER,
        payload: payload,
    };
};