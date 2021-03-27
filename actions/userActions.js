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

export function getProducts() {
    return dispatch => {
        axios.get('http://localhost:5000/products')
        .then(response => {
            dispatch({ type: 'GET_PRODUCTS', payload: response.data });
        })
        .catch((error)=>{
            console.log(error);
            });
    }
}

export function registerUser(userData) {
    return dispatch => {
            dispatch({ type: 'REGISTER_USER', userEmail:userData.email });
        }
}
export function logIn(email) {
    return dispatch => {
            dispatch({ type: 'LOG_IN', email });
        }
}
export function addItemToCart(item) {
    return dispatch => {
            dispatch({ type: 'ADD_ITEM_TO_CART', item });
        }
}
export function removeItemToCart(item) {
    return dispatch => {
            dispatch({ type: 'REMOVE_ITEM_FROM_CART', item });
        }
}
export function toggleCart() {
    return dispatch => {
            dispatch({ type: 'TOGGLE_CART' });
        }
}
export function decrementItemCount(item) {
    return dispatch => {
            dispatch({ type: 'DECREMENT_ITEM_COUNT', item });
        }
}
export function logout() {
    return dispatch => {
            dispatch({ type: 'LOG_OUT'});
        }
}