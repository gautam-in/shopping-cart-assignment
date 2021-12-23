import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../../network/apiCall';
import { apiEndPoint } from '../../../../network/apiEndpoint';
import { productsActions } from '../actions';
import { GET_PRODUCTS_LOADING } from '../actions/actionTypes';

function* getProductsWorkerSaga() {
  try {
    const response = yield call(apiCall, { method: 'GET', endPoint: apiEndPoint.GET_PRODUCTS });
    yield put(productsActions.getProductsAction.getProductsSuccess(response));
  } catch (error) {
    yield put(productsActions.getProductsAction.getProductsError(error));
  }
}

export function* getProductsWatcherSaga() {
  yield takeLatest(GET_PRODUCTS_LOADING, getProductsWorkerSaga);
}
