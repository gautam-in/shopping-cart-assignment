import { GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from "./action-types";
import { GET_PRODUCTS_API } from "../../apis";
import { getData } from '../../getService';

export function getProducts() {
  return function (dispatch) {
    return getData(GET_PRODUCTS_API).then(json => dispatch({ type: GET_PRODUCTS, payload: json.data }));
  };
}

export function addToCart(product) {
  return { type: ADD_TO_CART, product }
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, product }
}
