import { AUTH,BANNER, GET_CATEGORY, GET_PRODUCT } from "../types"

export const setAuthenticated = (id) => {
    return {
        type : AUTH,
        payload : id
    }
}

export const getBannerData = (data) => {
    return {
        type: BANNER,
        payload : data
    }
}

export const getCategoryData = (data) => {
    return {
        type : GET_CATEGORY,
        payload : data
    }
}

export const getProductData = (data) => {
    return {
        type : GET_PRODUCT,
        payload : data
    }
}