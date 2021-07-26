import { AUTH, BANNER, GET_CATEGORY, GET_PRODUCT } from "../types";

const initialState = {
    bannerData:[],
    auth:'',
    categoryData:[],
    productData:[]
}
export default (state = initialState, action) => {
    switch(action.type){
        case AUTH: 
        return {
            ...state,
            auth:action.payload
        }
        case BANNER: 
        return {
            ...state,
            bannerData:action.payload
        }
        case GET_CATEGORY: 
        return {
            ...state,
            categoryData:action.payload
        }
        case GET_PRODUCT: 
        return {
            ...state,
            productData:action.payload
        }
        default:
        return state;
    }
}