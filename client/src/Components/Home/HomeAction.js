import axios from 'axios';
import {config} from "../../config"

export const setBanner = data => ({
    type: "SET_BANNER",
    payload: data
});

export const setCategories = data => ({
    type: "SET_CATEGORIES",
    payload: data
})

export const setLoading = data => ({
    type: "SET_LOADING",
    payload: data
})

export const fetchBanner = data => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(`${config.base_url}/server/banners/index.get.json`)
            .then(res => {
                dispatch(setLoading(false));
                dispatch(setBanner(res.data)); 
            })
            .catch(err => {
                console.log(err);
                dispatch(setLoading(false));
            })
    }
}

export const fetchCategories = data => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(`${config.base_url}/server/categories/index.get.json`)
            .then(res => {
                dispatch(setLoading(false));
                dispatch(setCategories(res.data)); 
            })
            .catch(err => {
                console.log(err);
                dispatch(setLoading(false));
            })
    }
}