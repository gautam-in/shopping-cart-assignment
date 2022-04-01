// The cart reduct handles all cart actions and
//requests the store for a state change(cart related) with request to the initial state
import { ADD_TO_CART, REMOVE_CART_ITEM } from '../actions/actionTypes';
const initalState = {
  totalItems: 0,
  cart: [],
};

export default function cart(state = initalState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.find((product) => product.id === action.product.id)) {
        return {
          ...state,
          totalItems: state.totalItems + 1,
          cart: state.cart.map((product) => {
            if (product.id === action.product.id) {
              return { ...product, qty: product.qty + 1 };
            } else {
              return product;
            }
          }),
        };
      } else {
        return {
          ...state,
          totalItems: state.totalItems + 1,
          cart: state.cart.concat({ ...action.product, qty: 1 }),
        };
      }

    case REMOVE_CART_ITEM:
      const foundprod = state.cart.find(
        (product) => product.id === action.product.id
      );
      if (foundprod) {
        if (foundprod.qty > 1) {
          return {
            ...state,
            totalItems: state.totalItems - 1,
            cart: state.cart.map((product) => {
              if (product.id == action.product.id) {
                return { ...product, qty: product.qty - 1 };
              } else {
                return product;
              }
            }),
          };
        } else {
          // remove the product
          return {
            ...state,
            totalItems: state.totalItems - 1,
            cart: state.cart.filter(
              (product) => product.id !== action.product.id
            ),
          };
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}
