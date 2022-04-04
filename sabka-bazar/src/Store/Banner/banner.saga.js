import { takeLatest, put } from "redux-saga/effects";
import { fetchAPIData } from "../APIService";
import { BANNERS } from "./banner.action";
import {
  fetchBannersSuccessAction,
  fetchBannersFailureAction,
} from "./banner.action";

function* getBanners() {
  try {
    const response = yield fetchAPIData("banners");
    yield put(fetchBannersSuccessAction(response.data));
  } catch (error) {
    yield put(fetchBannersFailureAction());
  }
}

export function* bannersSaga() {
  yield takeLatest(BANNERS, getBanners);
}
