import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  userList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.userList.push(payload);
    },
    addCurrentUser(state, { payload }) {
      state.currentUser = payload;
      state.isLoggedIn = true;
    },
    signOut(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
