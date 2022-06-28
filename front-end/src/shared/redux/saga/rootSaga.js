import { all, call } from 'redux-saga/effects';

import watchHomeSaga from '../saga/home';
import watchProductsSaga from '../saga/productsListing';
import watchCartSaga from '../saga/cart';

export function* rootSaga() {
  yield all([ 
    call(watchHomeSaga),
    call(watchProductsSaga),
    call(watchCartSaga),
  ]);
}