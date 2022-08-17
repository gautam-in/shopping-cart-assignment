import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { homePageActions as actions } from './slice';
import { BannerItem } from 'types/banners';

function* handleGetBanners() {
  yield delay(500);
  const requestURL = `${process.env.REACT_APP_API}/banners`;
  try {
    const bannersList: BannerItem[] = yield call(request, requestURL);
    yield put(actions.getBannersData(bannersList));
  } catch (err: any) {
    yield put(actions.getBannersDataError(err));
  }
}

export function* homePageSaga() {
  yield takeLatest(actions.getBanners.type, handleGetBanners);
}
