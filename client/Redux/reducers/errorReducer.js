import { SET_ERROR } from "../actions/types";

const errorState = {
  errorMessage: '',
};

export const errorReducer = (state = errorState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {errorMessage: action.payload };
    default:
      return state;
  }
};
