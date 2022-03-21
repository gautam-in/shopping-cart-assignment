import * as userAction from "./user-action";
import UserActionTypes from "./user-actiontypes";

it("should create an action to set user status", () => {
  const setUserAction = {
    type: UserActionTypes.SET_USER,
    payload: true,
  };
  expect(userAction.setUser(true)).toEqual(setUserAction);
});

it("should create an action to register user to server", () => {
  const payload = {
    firstName: "Somesh",
    lastName: "Yadav",
    Email: "somesh19.1996@gmail.com",
    password: "someshyadav",
    confirmPassword: "someshyadav",
  };
  const registerUserAction = {
    type: UserActionTypes.REGISTER_USER,
    data: payload,
  };
  expect(userAction.registerUserToServer(payload)).toEqual(registerUserAction);
});

it("should create an action to check if user exists in server", () => {
  const user = {
    email: "somesh19@gmail.com",
    password: "somyadav",
  };
  const checkUser = {
    type: UserActionTypes.CHECK_USER,
    payload: user,
  };
  expect(userAction.checkUserExists(user)).toEqual(checkUser);
});
