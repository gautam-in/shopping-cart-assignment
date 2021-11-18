import { FETCH_CATEGORY_REQUEST ,FETCH_CATEGORY_SUCCESS ,FETCH_CATEGORY_FAILURE } from "./categoriesType";
import axios from "axios";

export const fetchCategoriesRequest = () =>{
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

export const fetchCategoriesSuccess = (categories) =>{
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload:categories,
        error:''
    }
}

export const fetchCategoriesFailure = (error) =>{
    return {
        type: FETCH_CATEGORY_FAILURE,
        categories:[],
        payload: error
    }
}

export const fetchCategories = () =>{
    return (dispatch)=>{
        dispatch(fetchCategoriesRequest())
         axios.get('http://localhost:5000/categories')
         .then(response => {
             const categories = response.data
             dispatch(fetchCategoriesSuccess(categories))
         })
         .catch(error=>{
             const errMsg= error.message
             dispatch(fetchCategoriesFailure(errMsg))
         })
    }
}