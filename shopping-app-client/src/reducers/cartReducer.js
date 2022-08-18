import {
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  EMPTY_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_DISPLAY_CART_MODAL
} from '../actions/types'
const initialState ={
    cartItems:[],
    shouldDisplayCartModal:false
}

export default function cartReducer(state=initialState , action ){
    const { type , payload } = action;
    switch(type){
        case ADD_ITEM_TO_CART:
      const itemToAdd = payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id  ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      return {
        ...state,
        cartItems: [ { ...itemToAdd, quantity: 1 },...state.cartItems],
      };
    case REMOVE_ITEM_FROM_CART:
      const itemToRemove = payload;
      const foundItem = state.cartItems.find(
        (item) => item.id === itemToRemove.id
      );
      if (foundItem.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== payload.id
          ),
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== payload._id
        ),
      };    
    
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      }
    case TOGGLE_DISPLAY_CART_MODAL:
      return{
        ...state,
        shouldDisplayCartModal:!state.shouldDisplayCartModal

      }  
      
    default:  
    return state;
    }
}
    
