import axios from "axios";

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

