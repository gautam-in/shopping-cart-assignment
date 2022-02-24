import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {
  fetchBannerDataFailure,
  fetchBannerDataSuccess,
} from "./banners.actions";
import BannersActionTypes from "./banners.types";

function* getBanners() {
  try {
    const response = yield axios
      .get("http://localhost:5000/banners")
      .then((response) => Promise.resolve(response))
    yield put(fetchBannerDataSuccess(response.data));
  } catch (error) {
    yield put(fetchBannerDataFailure());
  }
}

export function* fetchBannerData() {
  yield takeLatest(BannersActionTypes.FETCH_BANNERS_START, getBanners);
}
