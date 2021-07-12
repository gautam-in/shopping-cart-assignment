import React, { createContext, useReducer } from "react";
import userReducer from "./reducers/userReducer";

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
  const [login, logindispatch] = useReducer(userReducer, {});

  return (
    <LoginContext.Provider value={{ ...login, logindispatch }}>
      {props.children}
    </LoginContext.Provider>
  );
};
