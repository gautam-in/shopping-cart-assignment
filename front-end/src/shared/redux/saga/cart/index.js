import { takeLatest,all } from 'redux-saga/effects';
import { addToCart }  from '../cart/cart.saga';
import { CART_ACTION_TYPES } from '../../actionTypes/cart';
import { requestDispatch } from '../../../Utils/utility';

export default function* watchCartSaga() {
  yield all([
    takeLatest( requestDispatch(CART_ACTION_TYPES.ADD_TO_CART), addToCart ),
  ]);
}