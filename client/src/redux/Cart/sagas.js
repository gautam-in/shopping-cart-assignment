import { takeLatest, put, all, call } from 'redux-saga/effects';

import { CartActionTypes } from './types';

import { addToCartSuccess } from './actions';
import { triggerNotification } from './../Home/actions';

function* addToCartStart({ payload }) {
  try {
    const { id, sku } = payload;
    const params = {
      method: 'post',
      body: {
        id,
        sku,
        qty: 1
      }
    }
    const res = yield fetch('http://localhost:5000/addToCart', params);
    yield res.json();
    yield put(addToCartSuccess({ ...payload, qty: 1 }));
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* addToCart() {
  yield takeLatest(
    CartActionTypes.ADD_TO_CART_START, 
    addToCartStart
  );
}

export default function* cartSagas() {
  yield all([
    call(addToCart)
  ])
}