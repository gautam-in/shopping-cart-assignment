import {
  CREATE_ADD_TO_CART_FAILURE,
  CREATE_ADD_TO_CART_REQUEST,
  CREATE_ADD_TO_CART_SUCCESS,
  PRODUCT_CART_QUANTITY,
  MODIFY_PRODUCT_CART_QUANTITY,
  REMOVE_PRODUCT_CART,
  DELETE_PRODUCT_CART
} from '../types';

export const createAddToCartRequest = (product) => ({
  type: CREATE_ADD_TO_CART_REQUEST,
  product
});

export const createAddToCartSuccess = (cartProduct) => ({
  type: CREATE_ADD_TO_CART_SUCCESS,
  cartProduct
});

export const createAddToCartFailure = () => ({
  type: CREATE_ADD_TO_CART_FAILURE
});

/* increment/decremt product quantity */
export const cartProductQuantity = (product) => ({
  type: PRODUCT_CART_QUANTITY,
  product
});

export const modifyCartProductQuantity = (product) => ({
  type: MODIFY_PRODUCT_CART_QUANTITY,
  product
});

/* remove product from cart */
export const DeleteCartProduct = (product) => ({
  type: DELETE_PRODUCT_CART,
  product
});

export const removeCartProduct = (product) => ({
  type: REMOVE_PRODUCT_CART,
  product
});
