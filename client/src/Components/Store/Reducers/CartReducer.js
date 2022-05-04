import { addItemToCart, removeItemFromCart } from "../Utils";
const INITIAL_STATE = {
    cartItems: [],
  };

const CartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "additem" : 
        return{
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
        }
        case 'removeItem' :
            return {
                ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload),
            }
        default: 
        return state
    }

}

export default CartReducer