import React, { useState } from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from "./sign-in.styles";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;
    console.log(`${email} => ${password}`);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ [name]: value });
  };
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={() => console.log("signin")} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
