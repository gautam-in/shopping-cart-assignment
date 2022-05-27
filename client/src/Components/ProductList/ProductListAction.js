import axios from 'axios';
import { config } from '../../config';

export const setProductList = data => ({
    type: "SET_PRODUCT_LIST",
    payload: data
})

export const setLoading = data => ({
    type: "SET_LOADING",
    payload: data
})

export const setSelectedCategory = data => ({
    type: "SET_SELECTED_CATEGORY",
    payload: data
})


export const fetchProductList = () => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(`${config.base_url}/server/products/index.get.json`)
            .then(res => {
                dispatch(setLoading(false));
                dispatch(setProductList(res.data)); 
            })
            .catch(err => {
                console.log(err);
                dispatch(setLoading(false));
            })
    }
}