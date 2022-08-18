import { SET_FILTERED_PRODUCTS } from "./types";
export const setProductsData =(products)=>({
    type:SET_FILTERED_PRODUCTS,
    payload:products
})