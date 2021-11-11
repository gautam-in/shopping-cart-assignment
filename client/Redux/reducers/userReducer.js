import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
