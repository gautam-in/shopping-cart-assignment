import {actions} from '../actionTypes/actionConstants'
const initialState = {
    productType: [],
    allProducts: [],
}

export default function productReducer(state=initialState,action){
    switch(action.type){
        case actions.FETCH_PRODUCT_TYPE:
        return{
            ...state,
            productType: action.payload,
        } 
        case actions.FETCH_ALL_PRODUCTS:
            return{
                ...state,
                allProducts: action.payload,
            }
        default:
            return state
           
    }
}