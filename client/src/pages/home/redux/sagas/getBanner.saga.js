import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../../network/apiCall';
import { homeActions } from '../actions';
import { GET_BANNER_LOADING } from '../actions/actionTypes';
import { apiEndPoint } from '../../../../network/apiEndpoint';

function* getBannerWorkerSaga() {
  try {
    const response = yield call(apiCall, { method: 'GET', endPoint: apiEndPoint.GET_BANNERS });
    yield put(homeActions.getBannerAction.getBannerSuccess(response));
  } catch (error) {
    yield put(homeActions.getBannerAction.getBannerError(error));
  }
}

export function* getBannerWatcherSaga() {
  yield takeLatest(GET_BANNER_LOADING, getBannerWorkerSaga);
}
