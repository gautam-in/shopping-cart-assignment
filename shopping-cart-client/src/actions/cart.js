// All action creators relating to our shopping cart
import { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_CART_ITEM } from './actionTypes';
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product: product,
  };
}

export const removeCartitem = (product) => {
  return {
    type: REMOVE_CART_ITEM,
    product: product,
  };
};

// export const setFilter = (payload = null) => {
//   return {
//     type: SET_FILTER,
//     payload: payload,
//   };
// };
