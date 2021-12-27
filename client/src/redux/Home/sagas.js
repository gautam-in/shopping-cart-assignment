import { takeLatest, call, all, put } from 'redux-saga/effects';

import { 
  fetchCategoriesSuccess, 
  fetchBannersSuccess } from './actions';
import { HomeActionTypes } from './types';
import { mapCategories } from './../helpers';

function* fetchCategoriesStart() {
  try {
    const res = yield fetch('http://localhost:5000/categories');
    const categoriesJSON = yield res.json();
    const categories = yield mapCategories(categoriesJSON);
    yield put(fetchCategoriesSuccess(categories));
  } catch(err) {
    console.log(err);
  }
}

function* fetchBannersStart() {
  try {
    const res = yield fetch('http://localhost:5000/banners');
    const banners = yield res.json();
    console.log(banners)
    yield put(fetchBannersSuccess(banners));
  } catch(err) {
    console.log(err);
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