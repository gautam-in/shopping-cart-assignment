import { ADD_QUANTITY, AUTH, BANNER, CLEAR_CART, GET_CATEGORY, GET_PRODUCT, MANAGE_CART, REMOVE_ITEM, REMOVE_QUANTITY, SHOW_MODAL, SHOW_TOAST, UPDATE_QUANTITY } from "../types"

export const setAuthenticated = (id) => {
    return {
        type: AUTH,
        payload: id
    }
}

export const getBannerData = (data) => {
    return {
        type: BANNER,
        payload: data
    }
}

export const getCategoryData = (data) => {
    return {
        type: GET_CATEGORY,
        payload: data
    }
}

export const getProductData = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}

export const manageCart = (data) => {
    return {
        type: MANAGE_CART,
        payload: data
    }
}

export const removeCartItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const addQuantity = (data) => {
    return {
        type: ADD_QUANTITY,
        payload: data
    }
}
export const removeQuantity = (data) => {
    return {
        type: REMOVE_QUANTITY,
        payload: data
    }
}

export const updateQuantity = (value) => {
    return {
        type: UPDATE_QUANTITY,
        payload: value
    }
}

export const toggleModal = (flag) => {
    return {
        type: SHOW_MODAL,
        payload: flag
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}