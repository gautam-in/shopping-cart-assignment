import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  banner: {
    isLoading: false,
    data: [],
    error: "",
  },
};

export const fetchBannerData = createAsyncThunk(
  "banner/fetchBannerData",
  async () => {
    const response = await axios.get("http://localhost:5000/banners");
    return response.data;
  }
);

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.banner.isLoading = true;
      })
      .addCase(fetchBannerData.fulfilled, (state, action) => {
        state.banner.isLoading = false;
        state.banner.data = action.payload;
      })
      .addCase(fetchBannerData.rejected, (state, action) => {
        state.banner.data = [];
        state.banner.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;
