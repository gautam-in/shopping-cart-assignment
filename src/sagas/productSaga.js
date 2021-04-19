import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import Api from '../services/Api';
import productsSchema from '../schema/productsSchema';
import { fetchProductDataSuccess, fetchProductsDataFailure } from '../actions/action';

export default function* fetchProductsSaga() {
  try {
    const products = yield call(Api.getproductsData);
    yield put(fetchProductDataSuccess(normalize(products, [productsSchema])));
  } catch (err) {
    yield put(fetchProductsDataFailure());
  }
}
