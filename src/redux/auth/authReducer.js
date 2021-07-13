import { SIGN_UP } from "./actionType";
let authstate = {
  signUp: [],
};

const authReducer = (state = authstate, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signUp: [...state.signUp, action.payload],
      };
    default:
      return state;
  }
};

export default authReducer;
