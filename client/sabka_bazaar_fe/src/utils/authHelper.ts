import { useState } from "react";
import { LocalStorage } from "services/storage";

export const UseLoginStatus = () => {
  // const [userAuthentication, setUserAuthentication] = useState(LocalStorage.getStorage("status"));
  // const updateUserAuthentication = () => {
  //   setUserAuthentication(userAuthentication === "logged-in" ? "" : "logged-in");
  // };
  let userAuthentication = LocalStorage.getStorage("status");
  const updateUserAuthentication = () => {
    userAuthentication = LocalStorage.setStorage("status", userAuthentication === "logged-in" ? "" : "logged-in");
  };
  return { userAuthentication, updateUserAuthentication };
};
