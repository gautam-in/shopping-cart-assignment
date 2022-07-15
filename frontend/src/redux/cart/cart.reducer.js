import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  categoryId: ""
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: action.payload
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: action.payload
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem._id !== action.payload._id
        )
      };
    case CartActionTypes.SET_CATEGORY:
      return {
        ...state,
        categoryId: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
