import React from "react";
import Container from "../../components/container/Container";
import SignUp from "../../components/sign-up/sign-up.component";
import { RegisterContainer } from "./register.styles";

const Register = () => {
  return (
    <RegisterContainer>
      <SignUp />
    </RegisterContainer>
  );
};

export default Register;
