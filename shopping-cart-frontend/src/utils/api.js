import axios from "axios";

export const getBanners = (successCallback = () => {}) => {
    return axios
    .get('http://localhost:5000/banners')
    .then(resp => successCallback(resp.data))
}

export const getCategories = (successCallback = () => {}) => {
    return axios
    .get('http://localhost:5000/categories')
    .then(resp => successCallback(resp.data))
}

export const getProducts = (successCallback = () => {}) => {
    return axios
    .get('http://localhost:5000/products')
    .then(resp => successCallback(resp.data))
}