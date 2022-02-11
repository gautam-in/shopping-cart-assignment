import { TOGGLE_CART_HIDDEN, ADD_ITEM, DECREMENT } from './cart.types';
import { addItemToCart, decrementCartItem } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case DECREMENT:
      return {
        ...state,
        cartItems: decrementCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
