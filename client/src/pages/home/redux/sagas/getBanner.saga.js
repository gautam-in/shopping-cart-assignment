import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { homeActions } from "../actions";
import { GET_BANNER_LOADING } from "../actions/actionTypes";

function* getBannerWorkerSaga() {
  try {
    const response = yield axios.get("http://localhost:5000/banners");
    yield put(homeActions.getBannerAction.getBannerSuccess(response.data));
  } catch (error) {
    yield put(homeActions.getBannerAction.getBannerError(error));
  }
}

export function* getBannerWatcherSaga() {
  yield takeLatest(GET_BANNER_LOADING, getBannerWorkerSaga);
}
