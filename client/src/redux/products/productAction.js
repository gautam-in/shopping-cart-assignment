import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS , FETCH_PRODUCT_FAILURE } from "./productType";
import axios from "axios";

export const fetchProductRequest = () =>{
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (product) =>{
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload:product,
        error:''
    }
}

export const fetchProductFailure = (error) =>{
    return {
        type: FETCH_PRODUCT_FAILURE,
        product:[],
        payload: error
    }
}

export const fetchProduct = (id) =>{
    return (dispatch)=>{
        dispatch(fetchProductRequest())
         axios.get('http://localhost:5000/products')
         .then(response => {
              if (!id) {
                const product = response.data
                dispatch(fetchProductSuccess(product))
                } 
                else {
                    const product = response.data
                    const filteredResponse = response.data.filter(
                    (product) => product.category === id
                );
                console.log(filteredResponse);
                dispatch(fetchProductSuccess(filteredResponse))
                }
         })
         .catch(error=>{
             const errMsg= error.message
             dispatch(fetchProductFailure(errMsg))
         })
    }
}

