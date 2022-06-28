import { takeLatest, all } from 'redux-saga/effects';
import { fetchProducts }  from '../productsListing/productsListing.saga';
import { PRODUCTS_ACTION_TYPES } from '../../actionTypes/productListing';
import { requestDispatch } from '../../../Utils/utility';

export default function* watchProductsSaga() {
  yield all([
    takeLatest( requestDispatch(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS), fetchProducts ),
  ]);
}