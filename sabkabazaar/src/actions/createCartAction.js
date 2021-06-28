import { ManageShopConstants } from '../contants';

export const SABKABAZAAR_CREATE_ADD_TO_CART_REQUEST = `${ManageShopConstants.MODULE_PREFIX}_CREATE_ADD_TO_CART_REQUEST`;
export const SABKABAZAAR_CREATE_ADD_TO_CART_SUCCESS = `${ManageShopConstants.MODULE_PREFIX}_CREATE_ADD_TO_CART_SUCCESS`;
export const SABKABAZAAR_CREATE_ADD_TO_CART_FAILURE = `${ManageShopConstants.MODULE_PREFIX}_CREATE_ADD_TO_CART_FAILURE`;

export const SABKABAZAAR_MODIFY_PRODUCT_CART_QUANTITY = `${ManageShopConstants.MODULE_PREFIX}_MODIFY_PRODUCT_CART_QUANTITY`;
export const SABKABAZAAR_DELETE_PRODUCT_CART = `${ManageShopConstants.MODULE_PREFIX}_DELETE_PRODUCT_CART`;
export const SABKABAZAAR_REMOVE_PRODUCT_CART = `${ManageShopConstants.MODULE_PREFIX}_REMOVE_PRODUCT_CART`;
export const SABKABAZAAR_PRODUCT_CART_QUANTITY = `${ManageShopConstants.MODULE_PREFIX}_PRODUCT_CART_QUANTITY`;

export const createAddToCartRequestAction = (product) => ({
  type: SABKABAZAAR_CREATE_ADD_TO_CART_REQUEST,
  product,
});

export const createAddToCartSuccessAction = (cartProduct) => ({
  type: SABKABAZAAR_CREATE_ADD_TO_CART_SUCCESS,
  cartProduct,
});

export const createAddToCartFailureAction = () => ({
  type: SABKABAZAAR_CREATE_ADD_TO_CART_FAILURE,
});

/* increment/decremt product quantity */
export const cartProductQuantityAction = (product) => ({
  type: SABKABAZAAR_PRODUCT_CART_QUANTITY,
  product,
});

export const modifyCartProductQuantityAction = (product) => ({
  type: SABKABAZAAR_MODIFY_PRODUCT_CART_QUANTITY,
  product,
});

/* remove product from cart */
export const DeleteCartProductAction = (product) => ({
  type: SABKABAZAAR_DELETE_PRODUCT_CART,
  product,
});

export const removeCartProductAction = (product) => ({
  type: SABKABAZAAR_REMOVE_PRODUCT_CART,
  product,
});
