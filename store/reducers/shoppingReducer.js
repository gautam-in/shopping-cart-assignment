import addToCart from '../../utils/addToCart';
import {
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CART_OPEN,
  ADD_TO_SHIPPING,
  DELETE_FROM_SHIPPING,
  RESET_STORE,
} from '../../utils/constants';
import deleteFromCart from '../../utils/deleteFromCart';

const shoppingReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CART_OPEN:
      return { ...state, cartOpen: action.payload };
      case ADD_TO_SHIPPING:{
        let { cart, totalPrice } = addToCart(
          action.payload,
          state.cartItems?.cart,
          state.cartItems?.totalPrice
        );
        return { ...state, cartItems: { ...state.cartItems, cart, totalPrice }};
      }
    case DELETE_FROM_SHIPPING:{
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
    case RESET_STORE: {
      state = {};
      return state;
    }
    default:
      return state;
  }
};

export default shoppingReducer;
