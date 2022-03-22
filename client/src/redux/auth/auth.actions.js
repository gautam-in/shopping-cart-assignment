import AuthActionTypes from "./auth.types";
import {
  auth,
  createUserProfileDocument,
} from "../../services/firebase.service";
import { loaderStart, loaderEnd } from "../loader/loader.actions";
import { toast } from "react-toastify";
import { clearCart } from "../cart/cart.actions";

export const registerUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loaderStart());
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const userRef = await createUserProfileDocument(user);
      dispatch(
        setCurrentUser({
          id: user.uid,
          email: user.email,
        })
      );
      dispatch(loaderEnd());
      return userRef.id !== "undefined";
    } catch (error) {
      dispatch(loaderEnd());
      dispatch({
        type: AuthActionTypes.REGISTER_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    }
  };

export const setCurrentUser = (payload) => async (dispatch) => {
  dispatch({
    type: AuthActionTypes.SET_CURRENT_USER,
    payload,
  });
};

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loaderStart());
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      dispatch(
        setCurrentUser({
          id: user.uid,
          email: user.email,
        })
      );
      dispatch(loaderEnd());
      toast.success("Logged in Successfully");
      return user;
    } catch (error) {
      dispatch(loaderEnd());
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(loaderStart());
    await auth.signOut();
    dispatch(clearCart());
    dispatch(setCurrentUser(null));
    toast.success("Logged out Successfully");
    dispatch(loaderEnd());
  } catch (error) {
    dispatch(loaderEnd());
    dispatch({
      type: AuthActionTypes.REGISTER_FAILURE,
      payload: error.message,
    });
    toast.error(error.message);
  }
};
