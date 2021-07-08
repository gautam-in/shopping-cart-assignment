import {
    SET_CART_OPEN,
    ADD_TO_SHIPPING,
    DELETE_FROM_SHIPPING,
  } from "../actions/Constant";
  import {addToCart,deleteFromCart} from "../../Utils/helper"
  
  const cartReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_CART_OPEN:
        return { ...state, cartOpen: action.payload };
      case ADD_TO_SHIPPING:
        let { cart, totalPrice } = addToCart(
          action.payload,
          state.cartItems?.cart,
          state.cartItems?.totalPrice
        );
        return { ...state, cartItems: { ...state.cartItems, cart, totalPrice } };
      case DELETE_FROM_SHIPPING:
        let { deleteCart, newTotalPrice } = deleteFromCart(
          action.payload,
          state.cartItems?.cart,
          state.cartItems?.totalPrice
        );
        return {
          ...state,
          cartItems: {
            ...state.cartItems,
            cart: deleteCart,
            totalPrice: newTotalPrice,
          },
        };
     
      default:
        return state;
    }
  };
  
  
  export default cartReducer;
  