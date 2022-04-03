const initialState = { isLoggedIn: false };

const productListReducer = (state = initialState, action) => {
  if (action.type === "SIGN_IN") {
    return { isLoggedIn: true };
  }
  if (action.type === "SIGN_OUT") {
    return { isLoggedIn: false };
  }
  return { ...state };
};

export default productListReducer;
