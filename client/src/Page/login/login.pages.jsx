import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import { LoginContainer } from "./login.styles";

const Login = () => {
  return (
    <LoginContainer>
      <SignIn />
    </LoginContainer>
  );
};

export default Login;
