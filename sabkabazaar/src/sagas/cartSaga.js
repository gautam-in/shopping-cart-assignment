import {all, call, put, takeLatest} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import schema from '../schema';
import {
  createAddToCartFailureAction,
  createAddToCartSuccessAction,
  DeleteCartProductAction,
  modifyCartProductQuantityAction,
  SABKABAZAAR_CREATE_ADD_TO_CART_REQUEST,
  SABKABAZAAR_PRODUCT_CART_QUANTITY,
  SABKABAZAAR_REMOVE_PRODUCT_CART,
} from '../actions';

/* create/add product to cart */
export function* createAddToCart(data) {
  const {product} = data;
  try {
    yield put(createAddToCartSuccessAction(normalize([product], [schema])));
    // const productData = yield call(Api.addToCart, product);
  } catch (err) {
    yield put(createAddToCartFailureAction());
  }
}

export function* createProductCart() {
  yield takeLatest(SABKABAZAAR_CREATE_ADD_TO_CART_REQUEST, createAddToCart);
}

/* create/add product to cart */

/* modify/change cart product quantity */
export function* modifyProductCartQuantity(data) {
  const {product} = data;
  yield put(modifyCartProductQuantityAction(normalize([product], [schema])));
}

export function* cartProductQuantity() {
  yield takeLatest(SABKABAZAAR_PRODUCT_CART_QUANTITY, modifyProductCartQuantity);
}
/* modify/change cart product quantity */

function* deleteCartQuantity(data) {
  const {product} = data;
  yield put(DeleteCartProductAction(product));
}
export function* removeCartProduct() {
  yield takeLatest(SABKABAZAAR_REMOVE_PRODUCT_CART, deleteCartQuantity);
}

export function* cartSaga() {
  yield all([
    call(createProductCart),
    call(cartProductQuantity),
    call(removeCartProduct),
  ]);
}
