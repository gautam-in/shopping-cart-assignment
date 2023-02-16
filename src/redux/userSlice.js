import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userName: "",
  email: "",
  windowSize: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeLoginData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      (state.userId = action.payload.userId),
        (state.userName = action.payload.userName),
        (state.userEmail = action.payload.userEmail);
    },
    storeLogoutData: (state) => {
      (state.userId = ""), (state.userName = ""), (state.userEmail = "");
    },
    setWindowSize: (state, action) => {
      state.windowSize = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeLoginData, storeLogoutData, setWindowSize } =
  userSlice.actions;

export default userSlice.reducer;
