import * as actionType from "../store/actionType"

const initialState = {
    carouselData : [],
    categoryData : [],
    productData : [],
    cartProduct : [],
    count : 0
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionType.GET_CAROUSEL_SUCCESS:
            return {
                ...state,
                carouselData : action.payload
            }
        case actionType.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryData : action.payload
            }
        case actionType.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                productData : action.payload
            }  
        case actionType.GET_CART_DATA_SUCCESS:
            return {
                ...state,
                ...state.cartProduct,
                ...state.count,
                cartProduct : action.data,
                count : action.count
            } 
        case actionType.UPDATE_CART_DATA:
            return {
                ...state,
                ...state.cartProduct,
                ...state.count,
                cartProduct : action.data,
                count : action.count
            } 
            
        default:return state
    }
}
export default reducer