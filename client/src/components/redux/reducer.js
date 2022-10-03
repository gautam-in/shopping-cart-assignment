import * as types from "./actionType"
const initialState={
products:[],
isLoading:true,
cartDisplay:false,
}

const productReducer=(state=initialState,action)=>{
switch(action.type){
    case types.GET_PROD:
        return {
            ...state,
            products:[...state.products,action.payload],
            // cartDisplay:false,
            isLoading:false,
        }
        case types.GET_CART:
            return{
                ...state, 
                cartDisplay:action.payload,
                isLoading:false,
            }
    case types.REMOVE_CART:
        return{
            ...state,
            products:action.payload,
            // cartDisplay:false,
            isLoading:false,
        }
  default:
    return state
}
}

export default productReducer;