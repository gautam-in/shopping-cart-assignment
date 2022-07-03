import { BannerList, CategoryList } from "models/home";
import { call, put, takeLatest } from "redux-saga/effects";
import { HomeRepository } from "repositories/home/home";
import { HomeActions } from "../actions/actions";
import { BANNER, CATEGORY } from "../actions/actionTypes";

function* getBannersWorkerSaga() {
  try {
    const response: BannerList = yield call(HomeRepository.getBanners);
    yield put(HomeActions.getBannersSuccess(response));
  } catch (error) {
    yield put(HomeActions.getBannersError(error));
  }
}

function* getCategoriesWorkerSaga() {
  try {
    const response: CategoryList = yield call(HomeRepository.getCategories);
    yield put(HomeActions.getCategoriesSuccess(response));
  } catch (error) {
    yield put(HomeActions.getCategoriesError(error));
  }
}

export default function* homeWatcherSaga() {
  yield takeLatest(BANNER.GET.LOADING, getBannersWorkerSaga);
  yield takeLatest(CATEGORY.GET.LOADING, getCategoriesWorkerSaga);
}
