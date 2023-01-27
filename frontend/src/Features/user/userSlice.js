import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalstorage } from "../../utilities/localstorageUser";

const initialState = {
  user: getItemFromLocalstorage(),
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { register, toggleLogin } = userSlice.actions;

export default userSlice.reducer;
