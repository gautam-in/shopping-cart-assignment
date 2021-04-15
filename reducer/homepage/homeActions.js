import axios from "axios";
export function getBanners() {
    return dispatch => {
        axios.get('http://localhost:5000/banners')
        .then(response => {
            dispatch({ type: 'GET_BANNERS', payload: response.data });
        })
        .catch((error)=>{
            console.log(error);
            });
    }
}

export function getCategories() {
    return dispatch => {
        axios.get('http://localhost:5000/categories')
        .then(response => {
            dispatch({ type: 'GET_CATEGORIES', payload: response.data });
        })
        .catch((error)=>{
            console.log(error);
            });
    }
}