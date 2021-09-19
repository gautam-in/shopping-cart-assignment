import { createSlice } from "@reduxjs/toolkit";

const userCredData = createSlice({
  name: "userBox",
  initialState: {
    userCredentials: [],
    isLoggedIn: false,
  },

  reducers: {
    userCred: (state, action) => {
      state.userCredentials.push(action.payload);
    },
    userStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { userCred, userStatus } = userCredData.actions;

export const userList = userCredData.reducer;
