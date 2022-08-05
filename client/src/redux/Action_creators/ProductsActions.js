import axios from "../../utils/axios";
import { ProductActions } from "../constants/productsAction_types";

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const products = await axios.get('products')
            dispatch(setProducts(products.data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const getFilterByCategory = (category) => {
    return async (dispatch) => {
        const products = await axios.get('http://localhost:5000/products').catch(err => {
        })
        const filterProducts = products.data.filter(item => item.category == category)
        dispatch(setProducts(filterProducts))
    }
}

export const getProductById = (id) => {
    return async (dispatch) => {
        try {
            const product = await axios.get(`product/${id}`)
            dispatch({
                type: ProductActions.GET_PRODUCT_BY_ID,
                payload: product.data
            })
        } catch (error) {

        }
    }
}

const setProducts = (data) => {
    return {
        type: ProductActions.GET_ALL_PRODUCTS,
        payload: data
    }
}

export const removeStoredProducts = () => {
    return {
        type: ProductActions.REMOVE_STORED_PRODUCTS
    }
}