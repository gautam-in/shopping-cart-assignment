import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS , FETCH_PRODUCT_FAILURE } from "./productType";

const initialState = {
    loading:false,
    product:[],
    error:''
}

const productReducer = (state= initialState, action) =>{
   
    switch(action.type){
        case FETCH_PRODUCT_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_PRODUCT_SUCCESS: return {
            ...state,
            product: action.payload,
            loading:false

        }
        case FETCH_PRODUCT_FAILURE: return {
            ...state,
            error:action.payload,
            loading:false
        }

        default: return state;
    }

}

export default productReducer