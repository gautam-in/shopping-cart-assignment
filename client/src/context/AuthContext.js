import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { user: null, errorMessage: action.payload };
    case "get_user":
      return { ...state, user: action.payload };
    case "sign_up":
      return { errorMessage: "" };
    case "sign_in":
      return {
        user: action.payload,
        errorMessage: "",
      };
    case "sign_out":
      return { user: null, errorMessage: "" };
    default:
      return state;
  }
};

/*const getUser = (dispatch) => {
  return async () => {
    const jsonToken = await localStorage.getItem("jsonToken");

    if (jsonToken == null) return;
    const response = await fetchUser();

    if (response.status === 200)
      dispatch({ type: "get_user", payload: response.data });

    return response;
  };
};

const signUp = (dispatch) => {
  return async (cred) => {
    const response = await signUpUser(cred);
    if (response.status === 200) dispatch({ type: "sign_up" });
    else dispatch({ type: "add_error", payload: response.data.error });
    return response;
  };
};
*/
const signIn = (dispatch) => {
  return (cred) => {
    let credList = [];
    let foundUser = null;
    if (localStorage.getItem("cred") !== null)
      credList = JSON.parse(localStorage.getItem("cred"));
    credList.forEach((creditional) => {
      if (
        creditional.email === cred.email &&
        creditional.password === cred.password
      ) {
        foundUser = creditional;
        return;
      }
    });
    if (foundUser === null)
      dispatch({ type: "add_error", payload: "Invaild Email and Password !!" });
    else dispatch({ type: "sign_in", payload: foundUser });
  };
};

const logOut = (dispatch) => {
  return () => {
    dispatch({ type: "sign_out" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, logOut },
  {
    user: null,
    errorMessage: "",
  }
);
