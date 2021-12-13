import React from 'react'
import { ButtonContainer } from '../../components/Button/Button.styled';
import { Copyright } from '../../components/Copyright/Copyright.component';
import FormInput from '../../components/Input/Input.component';
import { GroupContainer } from '../../components/Input/input.styles';
import { LoginContainer, LoginFormContainer, LoginTextContainer } from './Login.styled';

const LoginPage = () => {
    return (
        <>
        <LoginContainer>
          <LoginTextContainer>
            <h1>Login</h1>
            <p>Get access to your orders, Whishlist and Recommendations</p>
          </LoginTextContainer>
          <LoginFormContainer>
            <GroupContainer>
              <FormInput label="Email" value="" />
              <FormInput label="Password" type="password" value="" />
              <ButtonContainer>
                 Login
              </ButtonContainer>
            </GroupContainer>
          </LoginFormContainer>
        </LoginContainer>
        <Copyright>
            Copyright (c) 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd.
        </Copyright>
      </>
    )
};

export default LoginPage;
