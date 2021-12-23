import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../../network/apiCall';
import { apiEndPoint } from '../../../../network/apiEndpoint';
import { homeActions } from '../actions';
import { GET_CATEGORIES_LOADING } from '../actions/actionTypes';

function* getCategoriesWorkerSaga() {
  try {
    const response = yield call(apiCall, { method: 'GET', endPoint: apiEndPoint.GET_CATEGORIES });
    yield put(homeActions.getCategoriesAction.getCategoriesSuccess(response));
  } catch (error) {
    yield put(homeActions.getCategoriesAction.getCategoriesError(error));
  }
}

export function* getCategoriesWatcherSaga() {
  yield takeLatest(GET_CATEGORIES_LOADING, getCategoriesWorkerSaga);
}
