import cartTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils"; 

const INITIAL_STATE = {
    cartOpen: false,
    count: 0,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action)=>{

    switch(action.type){

        case cartTypes.HANDLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            }

        case cartTypes.ADD_ITEM:
            return {
                ...state,
                count: state.count + 1,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                count: state.count - 1,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }    
        default:
            return state;
    }

}

export default cartReducer