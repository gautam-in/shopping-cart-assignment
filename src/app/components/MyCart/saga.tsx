import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import map from 'lodash/map';
import { myCartActions as actions } from './slice';

const addProduct = ({ cart, newItem }) => {
  let tempCart = [...cart];
  let index = tempCart.findIndex(item => item.id === newItem.id);

  if (index > -1) {
    tempCart = map(tempCart, (item)  => {
      if(item.id === newItem.id) {
        const updateQuantity =  {
          ...item,
          quantity: item.quantity + 1,
        }
        return updateQuantity;
      } else {
        return item;
      }
    })
  } else {
    tempCart.push({ ...newItem, quantity: 1 });
  }

  return tempCart;
};

function* handleCartItem(data) {
  const { payload } = data;

  const addToCartURL = `${process.env.REACT_APP_API}/addToCart`;

  const options = {
    method: 'POST',
    data: { id: payload.newItem.id },
  };

  try {
    const cartRes = yield call(request, addToCartURL, options);
    if (cartRes) {
      const cartItems = addProduct(payload);
      yield put(actions.addItemSuccess(cartItems));
    }
  } catch (err: any) {
    yield put(actions.addItemError(err));
  }
}

export function* myCartSaga() {
  yield takeLatest(actions.addItem.type, handleCartItem);
}
