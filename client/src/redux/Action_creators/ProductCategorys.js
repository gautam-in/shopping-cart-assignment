import axios from "axios"
import { CategoryActionTypes } from "../constants/categoryAction_types"

export const getProductCategories=()=>{
    return async (dispatch)=>{
        const categories=await axios.get('http://localhost:5000/categories').catch(err=>{
        })
        dispatch(setCategories(categories.data))
    }
}



const setCategories=(data)=>{
    return {
        type:CategoryActionTypes.GET_PRODUCT_CATEGORIES,
        payload:data
    }
}