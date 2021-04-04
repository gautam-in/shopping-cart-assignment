import {call, put} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import Api from '../services/Api';
import schema from '../schema';
import {
  fetchCategoriesDataSuccess,
  fetchCategoriesDataFailure,
} from '../actions';

export default function* fetchCategoriesSaga() {
  try {
    const categories = yield call(Api.getCategories);
    yield put(fetchCategoriesDataSuccess(normalize(categories, [schema])));
  } catch (err) {
    yield put(fetchCategoriesDataFailure());
  }
}
