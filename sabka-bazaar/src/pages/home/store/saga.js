import { fetchBannersFromServer, fetchCategoriesFromServer } from "./api";
import { GET_BANNERS, GET_CATEGORIES } from "./types";
import { getBanners, getCategories } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleBannersData() {
  try {
    const data = yield call(fetchBannersFromServer);
    yield put(getBanners(data));
  } catch (error) {
    console.log("er : ", error);
  }
}
function* handleCategoriesData() {
  try {
    const data = yield call(fetchCategoriesFromServer);
    console.log(data);
    yield put(getCategories(data));
  } catch (error) {
    console.log("er : ", error);
  }
}

function* homeSaga() {
  yield takeLatest(GET_BANNERS, handleBannersData);
  yield takeLatest(GET_CATEGORIES, handleCategoriesData);
}

export default homeSaga;
