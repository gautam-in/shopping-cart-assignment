import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosGet, axiosPost} from "../utils/api/api";


export const getProductsAction = createAsyncThunk(
  'product/getProducts',
  async () => {
    const response = await axiosGet({endpoint: "/products"})
    return response
  }
)

export const postAddtoCartAction = createAsyncThunk(
  'product/addToCart',
  async (payload) => {
    const response = await axiosPost({endpoint: "/addToCart", payload})
    return response
  }
)