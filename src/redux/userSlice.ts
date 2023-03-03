import { createSlice } from "@reduxjs/toolkit";
import { UserReducerInterface, ActionInterface } from "./interface"

const initialState:UserReducerInterface = {
  userId: null,
  userName: null,
  email: null,
  windowSize: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeLoginData: (state:UserReducerInterface, action:ActionInterface) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      (state.userId = action.payload.userId),
        (state.userName = action.payload.userName),
        (state.email = action.payload.userEmail);
    },
    storeLogoutData: (state:UserReducerInterface) => {
      (state.userId = null), (state.userName = ""), (state.email = "");
    },
    setWindowSize: (state:UserReducerInterface, action:ActionInterface) => {
      state.windowSize = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeLoginData, storeLogoutData, setWindowSize } =
  userSlice.actions;

export default userSlice.reducer;
