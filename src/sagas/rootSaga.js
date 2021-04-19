import { takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST } from '../types';
import fetchProductsSaga from './productSaga';

function* rootSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default rootSaga;
