import { takeLatest, call, all, put } from "redux-saga/effects";

import { ProductsActionTypes } from './types';
import { fetchProductsSuccess } from './actions';

function* fetchProductsStart() {
  try {
    const res = yield fetch('http://localhost:5000/products');
    const productsJSON = yield res.json();
    yield put(fetchProductsSuccess(productsJSON));
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