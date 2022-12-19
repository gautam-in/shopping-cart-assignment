import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as action from "../api";

const initialState = {
  products: [],
  categories: [],
  banners: [],
  bannersLoading: false,
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
    bannersRequested: (items, { payload }) => {
      items.bannersLoading = true;
    },
    bannersRequestFailed: (items, { payload }) => {
      items.bannersLoading = false;
    },
    bannersDetailsReceive: (items, { payload }) => {
      items.banners = payload.data;
      items.bannersLoading = false;
    },
    categoriesRequested: (items, { payload }) => {
      items.categoriesLoading = true;
    },
    categoriesRequestFailed: (items, { payload }) => {
      items.categoriesLoading = false;
    },
    addToCart: (items, { payload }) => {
      let itemIndexinCart = items.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndexinCart === -1) {
        items.cartItems.push({ ...payload, itemCount: 1 });
      } else {
        items.cartItems[itemIndexinCart].itemCount++;
      }
    },
    decreaseCount: (items, { payload }) => {
      let itemIndexinCart = items.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (items.cartItems[itemIndexinCart].itemCount > 0) {
        items.cartItems[itemIndexinCart].itemCount -= 1;
      }
    },
    increaseCount: (items, { payload }) => {
      let itemIndexinCart = items.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      items.cartItems[itemIndexinCart].itemCount += 1;
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
  addToCart,
  increaseCount,
  decreaseCount,
  bannersRequested,
  bannersRequestFailed,
  bannersDetailsReceive,
} = slice.actions;

export const addItemToCart = (value) => (dispatch) => {
  dispatch({
    type: addToCart.type,
    payload: value,
  });
};
export const decreaseItemCount = (value) => (dispatch) => {
  dispatch({
    type: decreaseCount.type,
    payload: value,
  });
};
export const increaseItemCount = (value) => (dispatch) => {
  dispatch({
    type: increaseCount.type,
    payload: value,
  });
};

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
export const loadBanners = () => (dispatch, getState) => {
  return dispatch(
    action.apiCallBegan({
      url: `http://localhost:5000/banners`,
      onStart: bannersRequested.type,
      onError: bannersRequestFailed.type,
      onSuccess: bannersDetailsReceive.type,
    })
  );
};

//selectors
export const getCategories = createSelector(
  (state) => state.entities.items,
  (products) => products.categories
);
export const getBanners = createSelector(
  (state) => state.entities.items,
  (products) => products.banners
);

export const getProducts = createSelector(
  (state) => state.entities.items,
  (categories) => categories.products
);
export const getCartItems = createSelector(
  (state) => state.entities.items,
  (cartItems) => cartItems?.cartItems
);

export default slice.reducer;
