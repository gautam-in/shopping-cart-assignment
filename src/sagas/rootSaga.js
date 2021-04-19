import { takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST, FETCH_CATEGORIES_REQUEST } from '../types';
import fetchProductsSaga from './productSaga';
import fetchCategoriesSaga from './categoriesSaga';

function* rootSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
  yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}

export default rootSaga;
