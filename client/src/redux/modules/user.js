const UPDATE_LOGIN_DATA = "user/UPDATE_LOGIN_DATA";

const initialState = {
  isLoggedIn: false,
  email: "",
};
export function updateLoginData(email) {
  return {
    type: UPDATE_LOGIN_DATA,
    email,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_DATA:
      return {
        ...state,
        email: action.email,
        isLoggedIn: !!action.email,
      };
    default:
      return state;
  }
}
