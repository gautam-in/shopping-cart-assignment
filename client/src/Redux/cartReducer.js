import { createSlice } from "@reduxjs/toolkit";

const userCartContainer = createSlice({
  name: "usersBox",
  initialState: {
    orderListData: [
      { name: "Nishant", class: 12 },
      { name: "Sidhant", class: 10 },
    ],
  },

  reducers: {
    accessOrderList: (state, action) => {
      state.orderListData = action.payload;
    },
  },
});

export const { accessOrderList } = userCartContainer.actions;

export const userCart = userCartContainer.reducer;
