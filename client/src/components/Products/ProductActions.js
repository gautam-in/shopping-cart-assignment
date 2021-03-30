import ProductActionTypes from "./ProductTypes";

// get products
export const getProductsStart = () => ({
  type: ProductActionTypes.GET_PRODUCTS_START,
});

export const getProductsSuccess = (data) => ({
  type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const getProductsFailure = (error) => ({
  type: ProductActionTypes.GET_PRODUCTS_FAILURE,
  payload: error,
});

// add to cart
export const getAddToCartStart = (payload) => ({
  type: ProductActionTypes.GET_ADD_TO_CART_START,
  payload: payload,
});

export const getAddToCartSuccess = (data) => ({
  type: ProductActionTypes.GET_ADD_TO_CART_SUCCESS,
  payload: data,
});

export const getAddToCartFailure = (error) => ({
  type: ProductActionTypes.GET_ADD_TO_CART_FAILURE,
  payload: error,
});

// increment cart quantity
export const incrementQtyStart = (data) => ({
  type: ProductActionTypes.INCREMENT_QTY_START,
  payload: data,
});

export const incrementQtySuccess = (data) => ({
  type: ProductActionTypes.INCREMENT_QTY_SUCCESS,
  payload: data,
});

// decrement cart quantity
export const decrementQtyStart = (data) => ({
  type: ProductActionTypes.DECREMENT_QTY_START,
  payload: data,
});

export const decrementQtySuccess = (data) => ({
  type: ProductActionTypes.DECREMENT_QTY_SUCCESS,
  payload: data,
});
