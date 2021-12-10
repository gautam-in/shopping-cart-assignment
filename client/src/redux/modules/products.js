import axios from "axios";
import { takeEvery, all, put, delay } from "redux-saga/effects";

const ADD_PRODUCTS = "products/ADD_PRODUCTS";
const INITIATE_GET_PRODUCTS = "products/INITIATE_GET_PRODUCTS";
const FILTER_PRODUCT_BY_CATEGORY = "products/FILTER_PRODUCT_BY_CATEGORY";
const RESET_FILTERED_PRODUCTS = "products/RESET_FILTERED_PRODUCTS";

const initialState = {
  products: [],
  filteredProducts: [],
  productsFetching: true,
};

export function filterProductByCategory(categoryId) {
  return {
    type: FILTER_PRODUCT_BY_CATEGORY,
    categoryId,
  };
}

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

export function resetFilteredProducts() {
  return {
    type: RESET_FILTERED_PRODUCTS,
  };
}
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        productsFetching: false,
      };
    case FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: action.categoryId
          ? state.products.filter(
              (product) => product.category === action.categoryId
            )
          : [...state.products],
      };
    case RESET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [...state.products],
      };

    default:
      return state;
  }
}

export function* watchProducts() {
  yield all([watchGetProducts()]);
}
