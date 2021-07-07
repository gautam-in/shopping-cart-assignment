import addToCart from '../../utils/addToCart';
import { ADD_TO_SHIPPING, DELETE_FROM_SHIPPING, SET_CART_OPEN } from '../../utils/constants';
import deleteFromCart from '../../utils/deleteFromCart';

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CART_OPEN:
        return { ...state, cartOpen: action.payload };
    case ADD_TO_SHIPPING: {
      let { cart, totalPrice } = addToCart(
        action.payload,
        state.cartItems?.cart,
        state.cartItems?.totalPrice
      );
      return { ...state, cartItems: { ...state.cartItems, cart, totalPrice } };
    }
    case DELETE_FROM_SHIPPING: {
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
    }
    default:
        return state
  }
};

export default cartReducer;
