import { call, put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchProductDataSuccess, fetchProductsDataFailure } from '../actions';
import { FETCH_PRODUCTS_REQUEST } from '../utils/types';
import Api from '../services/Api';
import schema from '../schema';

export function* fetchProducts() {
  try {
    const products = yield call(Api.getProducts);
    yield put(fetchProductDataSuccess(normalize(products, [schema])));
  } catch (err) {
    yield put(fetchProductsDataFailure());
  }
}

export function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}
