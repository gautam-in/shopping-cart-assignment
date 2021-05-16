import { GET_CATEGORIES, GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, SHOW_MODAL, HIDE_MODAL } from "./action-types";
import { GET_CATEGORIES_API, GET_PRODUCTS_API } from "../../apis";
import { getData } from '../../getService';

export function getCategories() {
  return function (dispatch) {
    return getData(GET_CATEGORIES_API).then(json => dispatch({
      type: GET_CATEGORIES,
      payload: json.data
    }));
  };
}

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

export function showModal() {
  return { type: SHOW_MODAL }
}

export function hideModal() {
  return { type: HIDE_MODAL }
}