import store from "store/index";
import { history } from "Routes";

export const signIn = (data) => {
  console.log({ data, history });
  localStorage.setItem("user", data.email);
  history.replace("/home");
};

export const signOut = () => {
  console.log("Signout");
  localStorage.clear();
  store.dispatch({ type: "reset-store" });
};
