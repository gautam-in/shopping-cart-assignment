import { cartActionTypes } from './cartActionTypes'
import { updateQuantityIfExists } from './cartUtils';
const INITIAL_STATE = {
    visible: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, { type, payload}) => {
   switch (type) {
       case cartActionTypes.TOGGLE_DROPDOWN:
            return {
                ...state,
                visible: !state.visible,
            }
       case cartActionTypes.ADD_ITEM:
           return {
               ...state,
               cartItems : updateQuantityIfExists(state.cartItems, payload),
           }
       case cartActionTypes.CLEAR_ITEM:
           return {
               ...state,
               cartItems : state.cartItems.filter(cartItem => cartItem.id !== payload.id),
           }
       default:
           return state;
   }
}; 