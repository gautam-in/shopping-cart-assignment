import { LOGIN_USER, LOGOUT_USER } from "../constants/constants";

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
      payload: user,
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };
};
