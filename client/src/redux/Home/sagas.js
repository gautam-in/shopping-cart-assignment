import { takeLatest, call, all, put } from 'redux-saga/effects';

import { 
  fetchCategoriesSuccess, 
  fetchBannersSuccess,
  triggerNotification } from './actions';
import { HomeActionTypes } from './types';
import { mapCategories } from './../../utils/helpers';

export function* fetchCategoriesStart() {
  try {
    const res = yield fetch('http://localhost:5000/categories');
    const categoriesJSON = yield res.json();
    const categories = yield mapCategories(categoriesJSON);
    yield put(fetchCategoriesSuccess(categories));
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* fetchBannersStart() {
  try {
    const bannersRes = yield fetch('http://localhost:5000/banners');
    const banners = yield bannersRes.json();
    yield call(fetchCategoriesStart);
    yield put(fetchBannersSuccess(banners));
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* fetchCategories() {
  yield takeLatest(
    HomeActionTypes.FETCH_CATEGORIES_START, 
    fetchCategoriesStart
  );
}

function* fetchBanners() {
  yield takeLatest(
    HomeActionTypes.FETCH_BANNERS_START,
    fetchBannersStart
  );
}

export default function* homeSagas() {
  yield all([
    call(fetchCategories),
    call(fetchBanners)
  ]);
}