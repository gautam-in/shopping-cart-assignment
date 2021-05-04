import { takeLatest, put, all, call } from "redux-saga/effects";
import instance from "../../axios/axios";
import BannerActionTypes from "./BannerTypes";
import { getBannersSuccess, getBannersFailure } from "./BannerActions";

// get banners

export function* getBannersStart() {
  try {
    const response = yield instance.get("/categories");
    const { data } = response;
    if (data) {
      yield put(getBannersSuccess(data));
    }
  } catch (error) {
    yield put(getBannersFailure(error));
  }
}

export function* getBanners() {
  yield takeLatest(BannerActionTypes.GET_BANNERS_START, getBannersStart);
}

export function* BannerSaga() {
  yield all([call(getBanners)]);
}
