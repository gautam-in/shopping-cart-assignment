import {actions} from '../actionTypes/actionConstants';

const initialState = {
    cartItems: [],
    openCart: false,
}

export default function cartReducer( state=initialState, action){
    switch(action.type){
        case actions.UPDATE_TO_CART : 
        return{
            ...state,
            cartItems: action.payload,
        }
        case actions.OPEN_CART:
            return{
                ...state,
                openCart: action.payload,
            }
        default:
            return{
                ...state,
            }
    }
}