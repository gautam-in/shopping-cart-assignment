import { call, put } from 'redux-saga/effects';
import { Banner, categories } from '../../../endpoints';


import { httpRequest } from "../../../services/httpRequest.service";
import { HOME_ACTION_TYPES } from "../../actionTypes/home";


// Fetching banners
export function* fetchBanners() {
  try {
    const response = yield call(httpRequest, Banner,'GET');
    yield put({
            type:HOME_ACTION_TYPES.FETCH_BANNER,
            payload:response.data
    });
  } catch (error) {
    yield put({
        type:HOME_ACTION_TYPES.FETCH_BANNER,
        payload:[]
    });
  }
}

//  fetching categories
export function* fetchCategories() {
  try {
    const response = yield call(httpRequest, categories,'GET');
    yield put({
            type:HOME_ACTION_TYPES.FETCH_CATEGORIES,
            payload:response.data
    });
  } catch (error) {
    yield put({
        type:HOME_ACTION_TYPES.FETCH_CATEGORIES,
        payload:[]
    });
  }
}