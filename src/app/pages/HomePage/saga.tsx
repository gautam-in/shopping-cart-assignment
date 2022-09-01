import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { homePageActions as actions } from './slice';
import { BannerItem } from 'types/banners';

function* handleGetBanners() {
  const requestURL = `${process.env.REACT_APP_API}/banners`;
  try {
    const bannersList: BannerItem[] = yield call(request, requestURL);
    yield put(actions.getBannersData(bannersList));
    yield put(actions.getCategory());
  } catch (err: any) {
    yield put(actions.getBannersDataError(err));
  }
}

function* handleGetCategory() {
  const requestURL = `${process.env.REACT_APP_API}/categories`;
  try {
    const categoriesRes = yield call(request, requestURL);
    yield put(actions.getCategoryData(categoriesRes));
  } catch (err: any) {
    yield put(actions.getBannersDataError(err));
  }
}

export function* homePageSaga() {
  yield takeLatest(actions.getBanners.type, handleGetBanners);
  yield takeLatest(actions.getCategory.type, handleGetCategory);
}
