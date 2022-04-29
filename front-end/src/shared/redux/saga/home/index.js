import { takeLatest,  all } from 'redux-saga/effects';
import { fetchBanners, fetchCategories }  from '../home/home.saga';
import { HOME_ACTION_TYPES } from '../../actionTypes/home';
import { requestDispatch } from '../../../Utils/utility';

export default function* watchHomeSaga() {
  yield all([
    takeLatest( requestDispatch(HOME_ACTION_TYPES.FETCH_BANNER), fetchBanners ),
    takeLatest( requestDispatch(HOME_ACTION_TYPES.FETCH_CATEGORIES), fetchCategories ),
  ]);
}