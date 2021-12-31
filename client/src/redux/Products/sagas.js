import { takeLatest, call, all, put } from "redux-saga/effects";

import { fetchCategoriesStart } from './../Home/sagas';
import { ProductsActionTypes } from './types';
import { fetchProductsSuccess } from './actions';
import { triggerNotification } from './../Home/actions';

function* fetchProductsStart({ payload }) {
  try {
    const productsRes = yield fetch('http://localhost:5000/products');
    const productsJSON = yield productsRes.json();
    yield call(fetchCategoriesStart);
    yield put(fetchProductsSuccess({ products: productsJSON, filterId: payload }));
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
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