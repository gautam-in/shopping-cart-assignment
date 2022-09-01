import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { productListingActions as actions } from './slice';

function* handleGetData() {
  const categoryRequestURL = `${process.env.REACT_APP_API}/categories`;
  const productRequestURL = `${process.env.REACT_APP_API}/products`;
  try {
    const categoriesRes = yield call(request, categoryRequestURL);
    const productsRes = yield call(request, productRequestURL);
    yield put(actions.getDataSuccess({ categoriesRes, productsRes }));
  } catch (err: any) {
    yield put(actions.getDataFail(err));
  }
}

export function* productListingSaga() {
  yield takeLatest(actions.getData.type, handleGetData);
}
