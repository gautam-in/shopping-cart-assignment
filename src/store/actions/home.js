import * as actionType from "../actionType"

export const GetCarouseldata = () => {
    return {
        type: actionType.GET_CAROUSEL_DATA
    }
}

export const successCarouselDetails = (payload) => {
    return {
        type: actionType.GET_CAROUSEL_SUCCESS,
        payload: payload
    }
}
export const getCategorydata = () => {
    return {
        type: actionType.GET_CATEGORY_DATA
    }
}

export const successCategoryDetails = (payload) => {
    return {
        type: actionType.GET_CATEGORY_SUCCESS,
        payload: payload
    }
}
export const getProductdata = () => {
    return {
        type: actionType.GET_PRODUCT_DATA
    }
}

export const successProductDetails = (payload) => {
    return {
        type: actionType.GET_PRODUCT_SUCCESS,
        payload: payload
    }
}
export const getFilterProductdata = (data, count) => {
    return {
        type: actionType.GET_FILTERED_PRODUCT_DATA,
        data: data,
        count:count
    }
}
export const successCartDetails = (data, count) => {
    return {
        type: actionType.GET_CART_DATA_SUCCESS,
        data: data,
        count: count
    }
}
export const updateCartdata = (data, count) => {
    return {
        type: actionType.UPDATE_CART_DATA,
        data: data,
        count: count
    }
}
