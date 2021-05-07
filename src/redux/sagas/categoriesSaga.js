import { call, put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchCategoriesDataSuccess, fetchCategoriesDataFailure } from '../actions';
import { FETCH_CATEGORIES_REQUEST } from '../types';
import Api from '../services/Api';
import schema from '../schema';

export function* fetchCategories() {
  try {
    const categories = yield call(Api.getCategories);
    yield put(fetchCategoriesDataSuccess(normalize(categories, [schema])));
  } catch (err) {
    yield put(fetchCategoriesDataFailure());
  }
}

export function* categoriesSaga() {
  yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategories);
}
