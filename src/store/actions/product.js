import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const fetchProductsSuccess = (id, products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    categoryId: id,
    products: products,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error,
  };
};

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

export const filterProductsSet = (id) => {
  return {
    type: actionTypes.FILTER_PRODUCT_SET,
    categoryId: id,
  };
};

export const addToCartSuccess = (product, handleType) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    product: product,
    handleType: handleType,
  };
};

export const addToCartFail = (error) => {
  return {
    type: actionTypes.ADD_TO_CART_FAIL,
    error: error,
  };
};

export const addToCartStart = () => {
  return {
    type: actionTypes.ADD_TO_CART_START,
  };
};
export const cartOpenClose = (value) => {
  return {
    type: actionTypes.CART_OPEN_CLOSE,
    cartFlag: value,
  };
};


export const fetchProducts = (id) => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get("/products")
      .then((res) => {
        dispatch(fetchProductsSuccess(id, res.data));
      })
      .catch((err) => {
        dispatch(fetchProductsFail(err));
      });
  };
};

export const filterProducts = (id) => {
  return (dispatch) => {
    dispatch(filterProductsSet(id));
  };
};
export const addToCart = (product, type) => {
  return (dispatch) => {
    // dispatch(addToCartStart(product));
    const req = {
      id: product.id,
    };
    axios
      .post("/addToCart", req)
      .then((res) => {
        if ((res.data.response = "Success")) {
          dispatch(addToCartSuccess(product, type));
        }
      })
      .catch((err) => {
        dispatch(addToCartFail(err));
      });
  };
};

export const cartHandler = (value) => {
  return (dispatch) => {
    dispatch(cartOpenClose(value));
  };
}
