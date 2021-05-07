import { all, call, put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { CREATE_ADD_TO_CART_REQUEST, PRODUCT_CART_QUANTITY, REMOVE_PRODUCT_CART } from '../types';

import {
  createAddToCartFailure,
  createAddToCartSuccess,
  deleteCartProduct,
  modifyCartProductQuantity
} from '../actions';

import schema from '../schema';

/* create/add product to cart */
export function* createAddToCart(data) {
  const { product } = data;
  try {
    yield put(createAddToCartSuccess(normalize([product], [schema])));
  } catch (err) {
    yield put(createAddToCartFailure());
  }
}

export function* createProductCart() {
  yield takeLatest(CREATE_ADD_TO_CART_REQUEST, createAddToCart);
}
/* create/add product to cart */

/* modify/change cart product quantity */
export function* modifyProductCartQuantity(data) {
  const { product } = data;
  yield put(modifyCartProductQuantity(normalize([product], [schema])));
}

export function* cartProductQuantity() {
  yield takeLatest(PRODUCT_CART_QUANTITY, modifyProductCartQuantity);
}
/* modify/change cart product quantity */

function* deleteCartQuantity(data) {
  const { product } = data;
  yield put(deleteCartProduct(product));
}
export function* removeCartProduct() {
  yield takeLatest(REMOVE_PRODUCT_CART, deleteCartQuantity);
}

export function* cartSaga() {
  yield all([call(createProductCart), call(cartProductQuantity), call(removeCartProduct)]);
}
