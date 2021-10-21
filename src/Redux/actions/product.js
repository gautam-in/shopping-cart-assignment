import { api } from '../../Helpers/axiosInstance';
import { actions } from '../actionTypes/actionConstants'

export const fetchProductType = () => {
    return async (dispatch) => {
        try {
            const result = await api.get('/categories');
            result && dispatch({
                type: actions.FETCH_PRODUCT_TYPE,
                payload: result.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchAllProducts = () => {
    return async (dispatch) => {
        try {
            const result = await api.get('/products');
            result && dispatch({
                type: actions.FETCH_ALL_PRODUCTS,
                payload: result.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}