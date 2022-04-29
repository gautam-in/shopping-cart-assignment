import { call, put } from 'redux-saga/effects';
import { Products } from '../../../endpoints';


import { httpRequest } from "../../../services/httpRequest.service";
import { PRODUCTS_ACTION_TYPES } from "../../actionTypes/productListing";

export function* fetchProducts() {
  try {
    const response = yield call(httpRequest, Products,'GET');
    yield put({
            type:PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS,
            payload:response.data
    });
  } catch (error) {
    yield put({
        type:PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS,
        payload:[]
});
  }
}
