import { call, put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchBannersDataSuccess, fetchBannersDataFailure } from '../actions';
import { FETCH_BANNERS_REQUEST } from '../types';
import Api from '../services/Api';
import schema from '../schema';

export function* fetchBanners() {
  try {
    const banners = yield call(Api.getBanners);
    yield put(fetchBannersDataSuccess(normalize(banners, [schema])));
  } catch (err) {
    yield put(fetchBannersDataFailure());
  }
}

export function* bannersSaga() {
  yield takeLatest(FETCH_BANNERS_REQUEST, fetchBanners);
}
