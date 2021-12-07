import axios from "axios";
import { takeEvery, all, put, delay } from "redux-saga/effects";

const ADD_PRODUCTS = "products/ADD_PRODUCTS";
const INITIATE_GET_PRODUCTS = "products/INITIATE_GET_PRODUCTS";

const initialState = {
  products: [],
};

function* getProducts() {
  try {
    yield delay(2000);
    const { data: products } = yield axios({
      url: "http://localhost:5000/products",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    yield put({ type: ADD_PRODUCTS, payload: products });
  } catch (e) {
    console.log(e);
  }
}

export function initiateGetProducts() {
  return {
    type: INITIATE_GET_PRODUCTS,
  };
}
export function* watchGetProducts() {
  yield takeEvery(INITIATE_GET_PRODUCTS, getProducts);
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export function* watchProducts() {
  yield all([watchGetProducts()]);
}
