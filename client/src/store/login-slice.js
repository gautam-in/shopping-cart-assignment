import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let loginSlice = createSlice({
  name: "LoginUser",

  initialState: {
    isLoggedin:
      localStorage.getItem("userEmail") && localStorage.getItem("userPass"),
  },

  reducers: {
    setisLoginStatus(state, action) {
      if (action.payload === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPass");
      }
      state.isLoggedin = action.payload;
    },
  },
});

export const LoginActions = loginSlice.actions;

export default loginSlice.reducer;
