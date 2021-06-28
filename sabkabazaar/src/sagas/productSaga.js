import {call, put, takeLatest} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import Api from '../services/Api';
import schema from '../schema';
import {fetchProductDataSuccessAction, fetchProductsDataFailureAction, SABKABAZAAR_FETCH_PRODUCTS_REQUEST} from '../actions';

export function* fetchProducts() {
  try {    
    const products = yield call(Api.getProducts);
    console.log('shakun', products)
    yield put(fetchProductDataSuccessAction(normalize(products, [schema])));
  } catch (err) {
    yield put(fetchProductsDataFailureAction());
  }
}

export function* productSaga() {
  yield takeLatest(SABKABAZAAR_FETCH_PRODUCTS_REQUEST, fetchProducts);
}
