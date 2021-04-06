import {all, call} from 'redux-saga/effects';
import {categoriesSaga} from './categoriesSaga';
import {cartSaga} from './cartSaga';
import {productSaga} from './productSaga';

function* rootSaga() {
  yield all([call(productSaga), call(categoriesSaga), call(cartSaga)]);
}

export default rootSaga;
