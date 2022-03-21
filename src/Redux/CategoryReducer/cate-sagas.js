import { put, takeEvery } from "redux-saga/effects";
import categoryTypes from "./cate-actiontypes";
import axios from "axios";

export async function getcategoryAsync() {
  const category = await axios
    .get("/categories/index.get.json")
    .then((res) => {
      const data = res.data;
      data.sort((a, b) => a.order - b.order);
      let orderedCategory = data.filter((val) => val.order > 0);
      return orderedCategory;
    })
    .catch((error) => {
      return error.message;
    });

  return category;
}

export function* getCategoryData() {
  try {
    const category = yield getcategoryAsync();
    yield put({ type: categoryTypes.CATEGORIES, payload: category });
  } catch (e) {
    yield put({ type: categoryTypes.GET_ERROR, payload: e });
  }
}

export function* getCategory() {
  yield takeEvery(categoryTypes.GET_CATEGORY, getCategoryData);
}

export async function getOffersAsync() {
  const offers = await axios
    .get("/banners/index.get.json")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.message;
    });

  return offers;
}

export function* getOfferData() {
  try {
    const offers = yield getOffersAsync();
    yield put({ type: categoryTypes.OFFERS, payload: offers });
  } catch (e) {
    yield put({ type: categoryTypes.GET_ERROR, payload: e });
  }
}

export function* getOffers() {
  yield takeEvery(categoryTypes.GET_OFFERS, getOfferData);
}

export async function getProductsAsync() {
  const product = await axios
    .get("/products/index.get.json")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.message;
    });

  return product;
}

export function* getProductsData() {
  try {
    const products = yield getProductsAsync();
    yield put({ type: categoryTypes.PRODUCTS, payload: products });
  } catch (e) {
    yield put({ type: categoryTypes.GET_ERROR, payload: e });
  }
}

export function* getProducts() {
  yield takeEvery(categoryTypes.GET_PRODUCTS, getProductsData);
}
