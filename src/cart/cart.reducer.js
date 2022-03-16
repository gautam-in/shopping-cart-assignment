import { addItemToCart,removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    cart_items:[],
    itemsInCart:0
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SET_CART_ITEMS":
        return {
          ...state,
          cart_items:addItemToCart(state.cart_items, action.payload),
          
        };
        case "REMOVE_CART_ITEMS":
        return {
          ...state,
          cart_items:removeItemFromCart(state.cart_items, action.payload),
        };
        case "UPDATE_CART_QUANTITY":
        return {
          ...state,
          itemsInCart: action.payload
        };
        case "RESET_CART_STATE":
          return {
            ...state,
            cart_items:[],
          };
      default:
        return state;
    }
  };
  
  export default cartReducer;