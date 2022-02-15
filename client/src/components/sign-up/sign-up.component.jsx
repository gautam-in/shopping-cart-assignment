import React, { useState } from "react";
import Container from "../container/Container";
import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import {
  ButtonsBarContainer,
  SignUpContainer,
  SignUpTitle,
  SignUpTitleContainer,
} from "./sign-up.styles";

const SignUp = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = state;
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
      <SignUpContainer>
        <SignUpTitleContainer>
          <SignUpTitle>Signup</SignUpTitle>
          <span>We do not share your personal details with anyone</span>
        </SignUpTitleContainer>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="firstName"
            type="text"
            handleChange={handleChange}
            value={firstName}
            label="First Name"
            required
            autoComplete="true"
          />
          <FormInput
            name="lastName"
            type="text"
            handleChange={handleChange}
            value={lastName}
            label="Last name"
            required
            autoComplete="true"
          />
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="Email"
            required
            autoComplete="true"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
            autoComplete="true"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            required
            autoComplete="true"
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
