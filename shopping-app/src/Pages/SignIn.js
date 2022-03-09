import React from "react";
import { Button } from "../Components/Styles/Button.Styles";
import { Container, Wrapper } from "../Components/Styles/Header.styles";
import { Form, FormItem, Input, Label } from "../Components/Styles/Form.Styles";
import {
  HeadingPrimary,
  SubHeading,
} from "../Components/Styles/Heading.Styles";
import { FlexColumnContainer, FlexContainer } from "./Styles/SignIn.Styles";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <FlexContainer>
          <FlexColumnContainer>
            <HeadingPrimary>Login</HeadingPrimary>
            <SubHeading customMargin="3rem 0">
              Get access to your Orders, Wishlist and Recommendations
            </SubHeading>
          </FlexColumnContainer>
          <Form>
            <FormItem>
              <Input id="email" type="text" required />
              <Label htmlFor="email">Email</Label>
            </FormItem>
            <FormItem>
              <Input id="password" type="password" required />
              <Label htmlFor="password">Password</Label>
            </FormItem>
            <Button customMargin="3rem 0">Log In</Button>
          </Form>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
