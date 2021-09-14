import { createSlice } from "@reduxjs/toolkit";

const usersDetails = createSlice({
  name: "usersBox",
  initialState: {
    userEmail: "",
  },

  reducers: {
    userCred: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const { userCred } = usersDetails.actions;

export const userData = usersDetails.reducer;
