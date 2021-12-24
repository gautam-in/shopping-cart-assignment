import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../../network/apiCall';
import { apiEndPoint } from '../../../../network/apiEndpoint';
import { productsActions } from '../actions';
import { POST_CART_ITEM_LOADING } from '../actions/actionTypes';


function* postCartItemWorkerSaga({ payload }) {
  try {
    const response = yield call(apiCall, { method: 'POST', endPoint: apiEndPoint.POST_CART_ITEM, body: payload });
    yield put(productsActions.postCartItemActions.postCartItemSuccess(response));
  } catch (error) {
    yield put(productsActions.postCartItemActions.postCartItemError(error));
  }
}

export function* postCartItemWatcherSaga() {
  yield takeLatest(POST_CART_ITEM_LOADING, postCartItemWorkerSaga);
}
