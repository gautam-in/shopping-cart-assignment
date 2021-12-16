import { LOGIN_SUCCESS } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  data: null,
};
const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        data: action.userData,
      };

    default:
      return state;
  }
};
export default userLoginReducer;
