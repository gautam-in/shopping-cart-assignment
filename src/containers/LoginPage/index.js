import React from "react";
import { Wrapper, Container, LoginInfo, Title, SubTitle } from "./styled";
import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <Wrapper>
      <Container>
        <LoginInfo>
          <Title>Login</Title>
          <SubTitle>
            Get access to your Orders, Wishlist and Recommendations
          </SubTitle>
        </LoginInfo>
        <LoginForm />
      </Container>
    </Wrapper>
  );
}
