export const initialState = {
  banners: [],
  categories: [],
  products: [],
  cart: [],
  isLoading: false,
  hasError: false,
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    case "BANNERS":
      return {
        ...state,
        banners: action.payload,
      };

    case "PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = Number(item.qty) + 1)
            : item.qty
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = Number(item.qty) - 1)
            : item.qty
        ),
      };

    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "FAILED":
      return {
        ...state,
        hasError: action.payload,
      };

    default:
      return state;
  }
};
