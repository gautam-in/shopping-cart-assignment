import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as action from "../api";

const initialState = {
  products: [],
  categories: [],
  productsLoading: false,
  categoriesLoading: false,
  cartItems: [],
};

export const slice = createSlice({
  name: "items",
  initialState,
  reducers: {
    productsDetailsReceive: (items, { payload }) => {
      items.products = payload.data;
      items.productsLoading = false;
    },
    productsRequested: (items, { payload }) => {
      items.productsLoading = true;
    },
    productsRequestFailed: (items, { payload }) => {
      items.productsLoading = false;
    },
    categoriesDetailsReceive: (items, { payload }) => {
      items.categories = payload.data;
      items.categoriesLoading = false;
    },
    categoriesRequested: (items, { payload }) => {
      items.categoriesLoading = true;
    },
    categoriesRequestFailed: (items, { payload }) => {
      items.categoriesLoading = false;
    },
  },
});
export const searchItem = (value) => (dispatch) => {
  dispatch({
    type: searchItemInList.type,
    payload: value,
  });
};

// Action creators
const {
  productsDetailsReceive,
  productsRequested,
  productsRequestFailed,
  searchItemInList,
  categoriesRequested,
  categoriesDetailsReceive,
  categoriesRequestFailed,
} = slice.actions;

export const loadProducts = () => (dispatch, getState) => {
  return dispatch(
    action.apiCallBegan({
      url: `http://localhost:5000/products`,
      onStart: productsRequested.type,
      onError: productsRequestFailed.type,
      onSuccess: productsDetailsReceive.type,
    })
  );
};
export const loadCategories = () => (dispatch, getState) => {
  return dispatch(
    action.apiCallBegan({
      url: `http://localhost:5000/categories`,
      onStart: categoriesRequested.type,
      onError: categoriesRequestFailed.type,
      onSuccess: categoriesDetailsReceive.type,
    })
  );
};

//selectors
export const getCategories = createSelector(
  (state) => state.entities.items,
  (products) => products.categories
);

export const getProducts = createSelector(
  (state) => state.entities.items,
  (categories) => categories.products
);

export default slice.reducer;
