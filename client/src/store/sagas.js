import { all } from 'redux-saga/effects';
import { HomeScreenSaga } from '../redux/home/home.saga';
import { ProductsSaga } from '../redux/products/products.saga';


export default function* rootSaga() {
    yield all([
        HomeScreenSaga(),
        ProductsSaga()
    ])
}