export const initialState = {
  user: null,
  cartItems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "SET_CART":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "UPDATE_CART":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, count: action.payload.count }
            : cartItem
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
