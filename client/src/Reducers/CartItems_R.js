import { actionTypes } from "../Action";
const CART_INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
      // return action.payload;
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.FETCH_CART:
      return state;
    case actionTypes.ADD_RANDOM_PRODUCTS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.REMOVE_CARTITEM_BUNCH:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    // case actionTypes.CLEAR_CART:
    //     return {
    //         ...state,
    //         cart: action.payload
    //     };
    default:
      return state;
  }
};

export default cartReducer;
