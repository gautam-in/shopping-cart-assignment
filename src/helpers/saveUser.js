import store from "store/index";
import { history } from "Routes";

export const signIn = (data) => {
  localStorage.setItem("user", data.email);
  history.replace("/home");
};

export const signOut = () => {
  localStorage.clear();
  store.dispatch({ type: "reset-store" });
};
