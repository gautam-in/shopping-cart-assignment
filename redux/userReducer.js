const UPDATE_LOGIN = "UPDATE_LOGIN";

export const updateLogin = () => {
  return {
    type: UPDATE_LOGIN,
  };
};

const loginState = { loggedIn: false };

export const userReducer = (state = loginState, action) => {
  if (action.type === UPDATE_LOGIN) return { ...loginState, loggedIn: true };
  return { ...state };
};
