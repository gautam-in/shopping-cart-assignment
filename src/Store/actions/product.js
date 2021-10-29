import { api } from "../../Library/axiosWrapper";
import { actions } from "../actionTypes/constants";

export const fetchAllProd = () => {
    return async (dispatch) => {
        try{
        const res = await api.get('/products');
         res && dispatch({
            type: actions.FETCH_ALL_PROD,
            payload: res.data,
        })
    } catch (error) {
        console.error(error);
    }
    }
}

export const fetchProdTypes = () => {
    return async (dispatch) => {
        try{
        const res = await api.get('/categories');
         res && dispatch({
            type: actions.FETCH_PROD_TYPE,
            payload: res.data,
        })
    } catch (error) {
        console.error(error);
    }
    }
}