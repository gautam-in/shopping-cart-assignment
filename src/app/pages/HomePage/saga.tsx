import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { homePageActions as actions } from './slice';
import { BannerItem } from 'types/banners';

function* handleGetBanners() {
  console.log(process.env);
  yield delay(500);
  const requestURL = `${process.env.API}/banners`;
  try {
    // Call our request helper (see 'utils/request')
    const repos: BannerItem = yield call(request, requestURL);
    console.log(repos);
  } catch (err: any) {
    // do nothing
  }
}

export function* homePageSaga() {
  yield takeLatest(actions.getBanners.type, handleGetBanners);
}
