import { takeLatest, call, all, put } from "redux-saga/effects";

import { fetchCategoriesStart } from './../Home/sagas';
import { ProductsActionTypes } from './types';
import { fetchProductsSuccess } from './actions';

function* fetchProductsStart({ payload }) {
  try {
    const productsRes = yield fetch('http://localhost:5000/products');
    const productsJSON = yield productsRes.json();
    yield call(fetchCategoriesStart);
    yield put(fetchProductsSuccess({ products: productsJSON, filterId: payload }));
  } catch(err) {
    console.log(err);
  }
}

function* fetchProducts() {
  yield takeLatest(
    ProductsActionTypes.FETCH_PRODUCTS_START, 
    fetchProductsStart
  );
}


export default function* productsSagas() {
  yield all([
    call(fetchProducts)
  ]);
}