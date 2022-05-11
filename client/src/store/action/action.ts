import {
    LOGIN,
    ADDTOCART,
    LOGOUT,
    USERS_ERROR,
    GET_BANNER,
    REMOVE_QTY,
    ADD_QTY,
    SELECT_CATEGORY
} from "../action.type";
import {URL} from '../../config/config'
import axios from 'axios'
import { Dispatch } from "redux";

export const login = () => {
    return (dispatch: any) => {
        dispatch({
            type: LOGIN,
            payload: '',
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: ''
    }
}

export const getBanner = () => async (dispatch: any) => {
    try {
        const banner = await axios.get(`${URL}/banners`)
        const category = await axios.get(`${URL}/categories`)
        const products = await axios.get(`${URL}/products`)
        const data = {
            banner: banner.data,
            category: category.data.filter((d: any) => d.order !== -1),
            products: products.data
        }
        dispatch({
            type: GET_BANNER,
            payload: data,
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: e,
        })
    }

}

export const addToCart = (id: Number) => async (dispatch: Dispatch<any>) => {
    try {
        var config = {
            method: 'post',
            url: `${URL}/addToCart?productID=${id}`,
            headers: {}
        };
        const postProduct = await axios(config);
        if (postProduct.data.response === "Success") {
            dispatch({
                type: ADDTOCART,
                payload: id
            })
        }

    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: e,
        })
    }

}

export const removeQty = (id: Number) => {
    return {
        type: REMOVE_QTY,
        payload: id
    }
}

export const addQty = (id: Number) => {
    return {
        type: ADD_QTY,
        payload: id
    }
}

export const selectCategory = (order: Number) => {
    return {
        type: SELECT_CATEGORY,
        payload: order
    }
}