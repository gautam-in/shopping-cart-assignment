import React from "react";
import { Button } from "../../Components/Button/ButtonElements";
import {
  Container,
  Wrapper,
} from "../../Components/Containers/ContainerElements";
import {
  Form,
  FormItem,
  Input,
  Label,
} from "../../Components/Input/InputElements";
import {
  HeadingPrimary,
  SubHeading,
} from "../../Components/Typography/Typography";
import { FlexColumnContainer, FlexContainer } from "./SignInElements";

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
