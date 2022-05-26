import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let loginSlice = createSlice({
  name: "LoginUser",

  initialState: {
    isLoggedin: false,
  },

  reducers: {
    setisLoginStatus(state, action) {
      state.isLoggedin = action.payload;
    },
  },
});

export const LoginActions = loginSlice.actions;

export default loginSlice.reducer;
