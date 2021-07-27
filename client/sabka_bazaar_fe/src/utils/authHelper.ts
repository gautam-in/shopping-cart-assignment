import { LocalStorage } from "services/storage";

export const UseLoginStatus = () => {

  let userAuthentication = LocalStorage.getStorage("status");
  const updateUserAuthentication = () => {
    userAuthentication = LocalStorage.setStorage("status", userAuthentication === "logged-in" ? "" : "logged-in");
  };
  return { userAuthentication, updateUserAuthentication };
};
