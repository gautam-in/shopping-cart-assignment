import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosGet} from "../utils/api/api";

export const getBannersAction = createAsyncThunk(
    'home/getBanners',
    async () => {
      const response = await axiosGet({endpoint: "/banners"})
      return response
    }
  )



  export const getCategoriesAction = createAsyncThunk(
    'home/getCategories',
    async () => {
      const response = await axiosGet({endpoint: "/categories"})
      return response
    }
  )




  