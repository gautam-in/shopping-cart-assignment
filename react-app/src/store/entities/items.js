import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import * as action from "../api";

const initialState = {
  listingItems: [],
  filteredItems: [],
  cartItems: [],
  currentPage: "home",
  loading: false,
  filters: {},
  filteredColours: [],
  filteredTypes: [],
  filteredGender: [],
  filterBy: {},
  showFilterSecMobile: false,
};

export const slice = createSlice({
  name: "items",
  initialState,
  reducers: {
    testDetailsReceive: (home, { payload }) => {
      home.listingItems = payload.data;
      let colors = [];
      let gender = [];
      let type = [];

      payload.data.map((item) => {
        if (!colors.includes(item.color)) {
          colors.push(item.color);
        }
        if (!gender.includes(item.gender)) {
          gender.push(item.gender);
        }
        if (!type.includes(item.type)) {
          type.push(item.type);
        }
        home.filters = { colors, gender, type };
      });
      home.loading = false;
    },
    testsRequested: (home, { payload }) => {
      home.loading = true;
    },
    testsRequestFailed: (home, { payload }) => {
      home.loading = false;
    },
    addToCart: (home, { payload }) => {
      let itemIndexinCart = home.cartItems.findIndex((item) => item.id === payload.id);
      if (itemIndexinCart === -1) {
        home.cartItems.push({ ...payload, itemCount: 1 });
      } else {
        home.cartItems[itemIndexinCart].itemCount++;
      }
    },
    decreaseCount: (home, { payload }) => {
      let itemIndexinCart = home.cartItems.findIndex((item) => item.id === payload.id);
      if (home.cartItems[itemIndexinCart].itemCount > 0) {
        home.cartItems[itemIndexinCart].itemCount -= 1;
      }
    },
    increaseCount: (home, { payload }) => {
      let itemIndexinCart = home.cartItems.findIndex((item) => item.id === payload.id);
      home.cartItems[itemIndexinCart].itemCount += 1;
    },
    updatePage: (home, { payload }) => {
      home.currentPage = payload;
    },
    deleteItem: (home, { payload }) => {
      home.cartItems = home.cartItems.filter((item) => item.id !== payload.id);
    },
    searchItemInList: (home, { payload }) => {
      home.filteredColours = [];
      home.filteredTypes = [];
      home.filteredGender = [];
      const myArray = payload.split(" ");
      console.log(current(home.filters.colors));
      myArray.map((each) => {
        if (home.filters?.colors.includes(capitalizeFirstLetter(each))) {
          if (!home.filteredColours.includes(capitalizeFirstLetter(each))) {
            home.filteredColours.push(capitalizeFirstLetter(each));
          }
        }
        if (home.filters?.type.includes(capitalizeFirstLetter(each))) {
          if (!home.filteredTypes.includes(capitalizeFirstLetter(each))) {
            home.filteredTypes.push(capitalizeFirstLetter(each));
          }
        }
        if (home.filters?.gender.includes(capitalizeFirstLetter(each))) {
          if (!home.filteredGender.includes(capitalizeFirstLetter(each))) {
            home.filteredGender.push(capitalizeFirstLetter(each));
          }
        }
        home.filterBy = { ...(home.filteredColours.length > 0 && { color: home.filteredColours }), ...(home.filteredTypes.length > 0 && { type: home.filteredTypes }), ...(home.filteredGender.length > 0 && { gender: home.filteredGender }) };
        let result = home.listingItems.filter((o) => Object.keys(home.filterBy).every((k) => home.filterBy[k].some((f) => o[k] === f)));
        home.filteredItems = result;
      });
    },
    filter: (home, { payload }) => {
      if (payload.key === "colors") {
        if (home.filteredColours.includes(payload.filter)) {
          home.filteredColours = home.filteredColours.filter((item) => item !== payload.filter);
        } else home.filteredColours.push(payload.filter);
      } else if (payload.key === "type") {
        if (home.filteredTypes.includes(payload.filter)) {
          home.filteredTypes = home.filteredTypes.filter((item) => item !== payload.filter);
        } else home.filteredTypes.push(payload.filter);
      } else if (payload.key === "gender") {
        if (home.filteredGender.includes(payload.filter)) {
          home.filteredGender = home.filteredGender.filter((item) => item !== payload.filter);
        } else home.filteredGender.push(payload.filter);
      }

      home.filterBy = { ...(home.filteredColours.length > 0 && { color: home.filteredColours }), ...(home.filteredTypes.length > 0 && { type: home.filteredTypes }), ...(home.filteredGender.length > 0 && { gender: home.filteredGender }) };
      let result = home.listingItems.filter((o) => Object.keys(home.filterBy).every((k) => home.filterBy[k].some((f) => o[k] === f)));
      home.filteredItems = result;
    },
    filterSec: (home, { payload }) => {
      home.showFilterSecMobile = !home.showFilterSecMobile;
    },
  },
});
export const searchItem = (value) => (dispatch) => {
  dispatch({
    type: searchItemInList.type,
    payload: value,
  });
};
export const deleteCartItem = (value) => (dispatch) => {
  dispatch({
    type: deleteItem.type,
    payload: value,
  });
};
export const filterByChoice = (value) => (dispatch) => {
  dispatch({
    type: filter.type,
    payload: value,
  });
};
export const updateCurrentPage = (value) => (dispatch) => {
  dispatch({
    type: updatePage.type,
    payload: value,
  });
};
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
export const setShowFilterSec = (value) => (dispatch) => {
  dispatch({
    type: filterSec.type,
    payload: value,
  });
};
// Action creators
const { testDetailsReceive, testsRequested, testsRequestFailed, addToCart, decreaseCount, increaseCount, updatePage, filter, deleteItem, searchItemInList, filterSec } = slice.actions;

export const loadItems = () => (dispatch, getState) => {
  return dispatch(
    action.apiCallBegan({
      url: `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`,
      onStart: testsRequested.type,
      onError: testsRequestFailed.type,
      onSuccess: testDetailsReceive.type,
    })
  );
};

//selectors
export const getFilteredGender = createSelector(
  (state) => state.entities.home,
  (filteredGender) => filteredGender?.filteredGender
);

export const getFilteredTypes = createSelector(
  (state) => state.entities.home,
  (filteredTypes) => filteredTypes?.filteredTypes
);

export const getFilteredColours = createSelector(
  (state) => state.entities.home,
  (filteredColours) => filteredColours?.filteredColours
);

export const getFilteredItems = createSelector(
  (state) => state.entities.home,
  (filteredItems) => filteredItems?.filteredItems
);

export const getFilters = createSelector(
  (state) => state.entities.home,
  (filters) => filters?.filters
);

export const getListingItems = createSelector(
  (state) => state.entities.home,
  (listingItems) => listingItems?.listingItems
);

export const getCartItems = createSelector(
  (state) => state.entities.home,
  (cartItems) => cartItems?.cartItems
);
export const getCurrentPage = createSelector(
  (state) => state.entities.home,
  (currentPage) => currentPage?.currentPage
);
export const getShowFilterSecMobile = createSelector(
  (state) => state.entities.home,
  (showFilterSecMobile) => showFilterSecMobile?.showFilterSecMobile
);

export default slice.reducer;
