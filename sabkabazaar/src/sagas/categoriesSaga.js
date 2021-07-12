import {call, put, takeLatest} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import Api from '../services/Api';
import schema from '../schema';
import {
  fetchCategoriesDataSuccessAction,
  fetchCategoriesDataFailureAction,
  SABKABAZAAR_FETCH_CATEGORIES_REQUEST
} from '../actions';

export function* fetchCategories() {
  try {
    const categories = yield call(Api.getCategories);
    yield put(fetchCategoriesDataSuccessAction(normalize(categories, [schema])));
  } catch (err) {
    yield put(fetchCategoriesDataFailureAction());
  }
}

export function* categoriesSaga() {
  yield takeLatest(SABKABAZAAR_FETCH_CATEGORIES_REQUEST, fetchCategories);
}
