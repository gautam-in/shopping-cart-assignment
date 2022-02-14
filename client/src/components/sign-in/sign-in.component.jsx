import React, { useState } from "react";
import Container from "../container/Container";
import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
  SignInTitleContainer,
} from "./sign-in.styles";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

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
    <Container>
      <SignInContainer>
        <SignInTitleContainer>
          <SignInTitle>Login</SignInTitle>
          <span>Get access to your Orders, Whishlist and Recommendations</span>
        </SignInTitleContainer>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </Container>
  );
};

export default SignIn;
