import { actions } from "../actionTypes/constants";

const initialState = {
    cartState: false,
    cartItems: []
}
export default function cartReducer(state = initialState, action){
    switch(action.type){
        case actions.UPDATE_CART: 
            return {...state, cartItems: action.payload}
        case actions.OPEN_CLOSE_CART: 
            return {...state, cartState: action.payload}
        default:
            return {...state}
    }
}