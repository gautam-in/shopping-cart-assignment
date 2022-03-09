import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as types from './home.types'
import * as homeService from '../../services/home.service'
import * as homeActions from './home.action';


// worker
function* categoryWorker() {
    const categories = yield call(homeService.getCategories);
    yield put(homeActions.setCategories(categories));
}


// watcher
export function* HomeScreenSaga() {
    yield takeLatest(types.GET_CATEGORIES, categoryWorker);
}