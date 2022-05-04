import * as cartActions from "./cart.action";

let initialState = {
  cartItems: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      let existingProduct = state.cartItems.find((item) => item.id === action.payload.product.id);
      if (existingProduct) {
        alert("Product Already Exists in cart");
        return state;
      } else
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.product],
        };
    case cartActions.INCREMENT_QUANTITY:
      let incrementedProducts = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else return item;
      });
      return {
        ...state,
        cartItems: [...incrementedProducts],
      };
    case cartActions.DECREMENT_QUANTITY:
      let decrementedProducts = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          return {
            ...item,
            quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 1,
          };
        } else return item;
      });
      return {
        ...state,
        cartItems: [...decrementedProducts],
      };
    case cartActions.DELETE_PRODUCT:
      let filterProducts = state.cartItems.filter((item) => item.id !== action.payload.productId);
      return {
        ...state,
        cartItems: [...filterProducts],
      };
    default:
      return state;
  }
};
