import manageUserAction from "./user-reducer";
import UserActionTypes from "./user-actiontypes";

describe("sets user status", () => {
  const initialState = {
    isUserLoggedIn: false,
    error: "",
  };

  it("should return the defualt state", () => {
    expect(manageUserAction(initialState, {})).toEqual(initialState);
  });

  it("should return status of the user", () => {
    expect(
      manageUserAction(initialState, {
        type: UserActionTypes.SET_USER,
        payload: true,
      })
    ).toEqual({
      isUserLoggedIn: true,
      error: "",
    });
  });

  it("should return response with user added to server", () => {
    expect(
      manageUserAction(initialState, {
        type: UserActionTypes.USER_ADDED,
      })
    ).toEqual({
      isUserLoggedIn: false,
      error: "",
    });
  });

  it("should return error response when the user is added", () => {
    expect(
      manageUserAction(initialState, {
        type: UserActionTypes.USER_ERROR,
        payload: "User not added",
      })
    ).toEqual({
      isUserLoggedIn: false,
      error: "User not added",
    });
  });
});
