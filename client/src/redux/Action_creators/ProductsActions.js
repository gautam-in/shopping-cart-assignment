import axios from "axios";
import { ProductActions } from "../constants/productsAction_types";

export  const getAllProducts=()=>{
    return async(dispatch)=>{
        const products=await axios.get('http://localhost:5000/products').catch(err=>{
            alert(err)
        })
        dispatch(setProducts(products.data))
    }
}

export const getFilterByCategory=(category)=>{
    return async(dispatch)=>{
        const products=await axios.get('http://localhost:5000/products').catch(err=>{
            alert(err)
        })
        const filterProducts=products.data.filter(item=>item.category==category)
        dispatch(setProducts(filterProducts))
    }
}

const setProducts=(data)=>{
    return {
        type:ProductActions.GET_ALL_PRODUCTS,
        payload:data
    }
}

export const removeStoredProducts=()=>{
    return {
        type:ProductActions.REMOVE_STORED_PRODUCTS
    }
}