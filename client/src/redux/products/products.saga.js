import * as types from './products.types';
import * as productsService from '../../services/products.service';
import * as productsActions from './products.action';
import { call, put, select, takeLatest } from 'redux-saga/effects';


function getCategory({ product }) {
    return product
}

// worker
function* productWorker() {
    const { categoryId = null } = yield select(getCategory);
    const data = yield call(productsService.getProducts);
    const products = yield call(productsService.filterCategory, data, categoryId);
    yield put(productsActions.setProducts(products));
}


// watcher
export function* ProductsSaga() {
    yield takeLatest(types.GET_PRODUCTS, productWorker);
}