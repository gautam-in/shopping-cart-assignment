import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosGet} from "../utils/api/api";


export const getProductsAction = createAsyncThunk(
  'home/getProducts',
  async () => {
    const response = await axiosGet({endpoint: "/products"})
    return response
  }
)

