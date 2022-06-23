import * as CONSTANTS from "./constants";

export function setCategories(data) {
  return {
    type: CONSTANTS.SET_CATEGORIES,
    payload: data,
  };
}
export function setFilter(data) {
  return {
    type: CONSTANTS.SET_FILTER,
    payload: data,
  };
}
export function setProducts(data) {
  return {
    type: CONSTANTS.SET_PRODUCTS,
    payload: data,
  };
}

export function setBannerData(data) {
  return {
    type: CONSTANTS.SET_BANNER_DATA,
    payload: data,
  };
}

export function toggleCart(update, data) {
  return { type: CONSTANTS.TOGGLE_CART, payload: { update, data } };
}
