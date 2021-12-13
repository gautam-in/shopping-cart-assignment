import React from "react";
import { ButtonContainer } from "../../components/Button/Button.styled";
import { Copyright } from "../../components/Copyright/Copyright.component";
import FormInput from "../../components/Input/Input.component";
import { GroupContainer } from "../../components/Input/input.styles.jsx";
import {
  SignupContainer,
  SignUpFormContainer,
  SignUpTextContainer,
} from "./Signup.styled.component";

const SignupPage = () => {
  return (
    <>
      <SignupContainer>
        <SignUpTextContainer>
          <h1>Signup</h1>
          <p>we do not share your personal details with anyone</p>
        </SignUpTextContainer>
        <SignUpFormContainer>
          <GroupContainer>
            <FormInput label="First Name" value="" />
            <FormInput label="Last Name" value="" />
            <FormInput label="Email" value="" />
            <FormInput label="Password" type="password" value="" />
            <FormInput label="Confirm Password" type="password" value="" />
            <ButtonContainer>
               Signup
            </ButtonContainer>
          </GroupContainer>
        </SignUpFormContainer>
      </SignupContainer>
      <Copyright>
          Copyright (c) 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd.
      </Copyright>
    </>
  );
};

export default SignupPage;
