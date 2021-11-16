import axios from "axios";
import { LOAD_CATEGORIES,CHOOSE_CATEGORY } from "./categoryAction";
export const ADD_TO_CART = 'ADD_TO_CART';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const RESET_CATEGORY = 'RESET_CATEGORY';
export const LOAD_CATEGORIES_PRODUCTS = 'LOAD_CATEGORIES_PRODUCTS';

export const loadProducts = () => {
    return async (dispatch,getState) => {
        try {
            let response = await axios.get('http://localhost:5000/products');
            // if(getState().Category.categories.length === 0){
            //     let response = await axios.get('http://localhost:5000/categories');
            //     dispatch({type:LOAD_CATEGORIES,data:response.data});
            // }
            dispatch({type:RESET_CATEGORY});
            dispatch({type:LOAD_PRODUCTS,data:response.data});
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const loadCategoryProducts = (categoryId,categoryName) => {
    return async(dispatch,getState) => {
        try {
            if(getState().Products.products.length>0){
                dispatch({type:CHOOSE_CATEGORY,id:categoryId,name:categoryName})
            }
            else{
                let response = await axios.get('http://localhost:5000/products');
                let categoryProducts = response.data.filter(product=>product.category === categoryId);
                dispatch({type:LOAD_CATEGORIES_PRODUCTS,data:response.data,categoryProducts:categoryProducts});
            }
        } catch (error) {
            
        }
    }
}



export const addToCart = (productId) => {
    return async (dispatch,getState) => {
        try {
            let response = await axios.post('http://localhost:5000/addToCart');
            if(response.data.response == "Success"){
                let product = getState().Products.products.find(p => p.id===productId);
                dispatch({type:ADD_TO_CART,data:{...product},id:productId});
            }
        } catch (error) {
            throw new Error(error.message);
        }

    }
}
