import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchproducts, { postProduct } from "services/products";

// fetch the products
export const getProducts = createAsyncThunk(
  "productPage/getProducts",
  async () => {
    try {
      const res = await fetchproducts();
      return res;
    } catch (error) {
      throw new Error(error?.message ?? "Get products failed");
    }
  }
);

// add product
export const addProduct = createAsyncThunk(
  "productPage/addProduct",
  async (id) => {
    console.log({ id });
    try {
      const res = await postProduct(id);
      return res;
    } catch (error) {
      throw new Error(error?.message ?? "Get products failed");
    }
  }
);

const initialState = {
  isLoading: false,
  isError: null,
  products: [],
  cartItems: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.products = [];
      state.isError = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.isError = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
    [addProduct.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems.push(action.productId);
      state.isError = null;
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
