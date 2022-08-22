import { SET_FILTERED_PRODUCTS } from "../actions/types";

const initialState = {
    products:[]
}

export default function cartReducer(state=initialState , action ){
    const { type , payload } = action
    switch(type){
        case SET_FILTERED_PRODUCTS:
            return{
                ...state,
                products:payload
            }
        default:
            return state    
    }
}