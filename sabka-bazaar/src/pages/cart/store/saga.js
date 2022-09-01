import { ADD_TO_CART, UPDATE_CART } from "./types";
import {
  addToCartLoading,
  addToCartSuccess,
  addToCartError,
  updateCart,
} from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";
import { postCartItemToServer } from "./api";

const addToCartHelper = ({ cartItems, productToAdd }) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

function* handleCartData({ payload }) {
  const options = {
    method: "POST",
    data: { id: payload.productToAdd.id },
  };

  try {
    const response = yield call(postCartItemToServer, options);
    if (response) {
      const cartItems = addToCartHelper(payload);
      yield put(addToCartSuccess(cartItems));
      yield put(addToCartLoading(false));
    }
  } catch (error) {
    yield put(addToCartError(error.code));
    yield put(addToCartLoading(false));
  }
}

function* updateCartHandler({ payload }) {
  yield put(updateCart(payload));
}

function* cartSaga() {
  yield takeLatest(ADD_TO_CART, handleCartData);
  yield takeLatest(UPDATE_CART, updateCartHandler);
}

export default cartSaga;
