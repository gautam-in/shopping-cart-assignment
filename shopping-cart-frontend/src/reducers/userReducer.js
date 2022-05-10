import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../utils/constant";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    error: "",
    activeUser: "",
  },
  reducers: {
    addUsers: (state, action) => {
      let userExist = state.users?.some(
        (e) => e.email === action.payload["Email"]
      );
      let data = createUserData(userExist, action.payload, state.users);
      return {
        ...state,
        users: [...data],
        activeUser: !userExist ? action.payload["Email"] : "",
        error: userExist ? Constants.SignupErr : "",
      };
    },
    login: (state, action) => {
      let userExist = state.users?.some(
        (e) => e.email === action.payload["Email"]
      );
      return {
        ...state,
        activeUser: userExist ? action.payload["Email"] : "",
        error: !userExist ? Constants.loginErr : "",
      };
    },
    logout: (state) => {
      return {
        ...state,
        activeUser: "",
      };
    },
  },
});

const createUserData = (userExist, item, prevData) => {
  if (!userExist) {
    return [
      ...prevData,
      {
        name: `${item["First Name"]} ${item["Last Name"]}`,
        email: item["Email"],
      },
    ];
  }
  return [...prevData];
};

export const { addUsers, login, logout } = userSlice.actions;

export default userSlice.reducer;
