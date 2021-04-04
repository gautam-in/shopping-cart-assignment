import {call, put} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import Api from '../services/Api';
import schema from '../schema';
import {fetchProductDataSuccess, fetchProductsDataFailure} from '../actions';

export default function* fetchProductsSaga() {
  try {
    const products = yield call(Api.getProducts);
    yield put(fetchProductDataSuccess(normalize(products, [schema])));
  } catch (err) {
    yield put(fetchProductsDataFailure());
  }
}
