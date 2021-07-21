import { SIGN_UP } from "./actionType";

export const signUp = (data) => {
  return {
    type: SIGN_UP,
    payload: data,
    loader: false,
  };
};
