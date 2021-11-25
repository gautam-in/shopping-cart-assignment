import { backendInstance } from "../../backend"

export const fetchProductWithId = (id) => {
    return {
        type : 'FETCH_PRODUCT_BY_ID',
        payload : {
            id
        }
    }
}

export const fetchAllProducts = (data) => {
    return {
        type : 'FETCH_ALL_PRODUCTS',
        payload : {
            products : data
        }
    }
}

export const fetchAllProductsError = () => {
    return {
        type : 'FETCH_ALL_PRODUCTS_ERROR'
    }
}

export function asyncFetchProducts() {
    return dispatch => {
        backendInstance.get('/products')
        .then(res => {
            dispatch(fetchAllProducts(res.data))
        })
        .catch(err => dispatch(fetchAllProductsError())) 
    }
}