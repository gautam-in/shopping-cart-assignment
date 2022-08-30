// import { postCartItemToServer } from "./api";
import { ADD_TO_CART } from "./types";
import { addToCartLoading, addToCartSuccess, addToCartError } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";
import { request } from "../../../utils/request";

// function* handleCartData(action) {
//   const options = {
//     method: "POST",
//     data: { id: action.payload },
//   };
//   try {
//     const response = yield call(postCartItemToServer, options);
//     if (response) {
//       yield put(addToCartSuccess(true));
//       yield put(addToCartLoading(false));
//     }
//   } catch (error) {
//     yield put(addToCartError(error.code));
//     yield put(addToCartLoading(false));
//     console.log("er : ", error);
//   }
// }
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
  const addToCartURL = `${process.env.REACT_APP_BASEURL}/addToCart`;

  const options = {
    method: "POST",
    data: { id: payload.productToAdd.id },
  };

  try {
    const response = yield call(request, addToCartURL, options);
    if (response) {
      const cartItems = addToCartHelper(payload);
      yield put(addToCartSuccess(cartItems));
      yield put(addToCartLoading(false));
    }
  } catch (error) {
    yield put(addToCartError(error.code));
    yield put(addToCartLoading(false));
    console.log("er : ", error);
  }
}

function* cartSaga() {
  yield takeLatest(ADD_TO_CART, handleCartData);
}

export default cartSaga;
