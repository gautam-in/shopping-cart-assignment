import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  products: [],
  loading: false,
  filteredProduct: [],
  addToCartProducts: [],
  cartFlag: false
};

const fetchProductsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchProductsSuccess = (state, action) => {
  let filteredproductData = [];
  if (
    action.categoryId !== "" &&
    action.categoryId !== "all" &&
    action.products.length > 0
  ) {
    filteredproductData = action.products.filter(
      (item) => item.category === action.categoryId
    );
  } else {
    filteredproductData = action.products;
  }
  return updateObject(state, {
    products: action.products,
    filteredProduct: filteredproductData,
    loading: false,
  });
};
const fetchProductsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const filterProductsSet = (state, action) => {
  let filteredproductData = [];
  if (
    action.categoryId !== "" &&
    action.categoryId !== "all" &&
    state.products.length > 0
  ) {
    filteredproductData = state.products.filter(
      (item) => item.category === action.categoryId
    );
  } else {
    filteredproductData = state.products;
  }
  return updateObject(state, { filteredProduct: filteredproductData });
};

const addToCartStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const addToCartSuccess = (state, action) => {
  if (action.handleType && action.handleType === "sub") {
    const modaddToCartProducts = [...state.addToCartProducts];
    const pos = modaddToCartProducts.findIndex(item => item.id === action.product.id);
    modaddToCartProducts.splice(pos, 1);
    return updateObject(state, {
      addToCartProducts: modaddToCartProducts,
      loading: false,
    });
  }
  return updateObject(state, {
    addToCartProducts: [...state.addToCartProducts, action.product],
    loading: false,
  });
};
const addToCartFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const cartOpenClose = (state, action) => {
  return updateObject(state, { cartFlag: action.cartFlag });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return fetchProductsStart(state, action);
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);
    case actionTypes.FILTER_PRODUCT_SET:
      return filterProductsSet(state, action);
    case actionTypes.ADD_TO_CART_START:
      return addToCartStart(state, action);
    case actionTypes.ADD_TO_CART_SUCCESS:
      return addToCartSuccess(state, action);
    case actionTypes.ADD_TO_CART_FAIL:
      return addToCartFail(state, action);
    case actionTypes.CART_OPEN_CLOSE:
      return cartOpenClose(state, action);
    default:
      return state;
  }
};

export default reducer;
