import React from "react";
import { Button } from "../Components/Styles/Button.Styles";
import { Container, Wrapper } from "../Components/Styles/Header.styles";
import { Form, FormItem, Input, Label } from "../Components/Styles/Form.Styles";
import {
  HeadingPrimary,
  SubHeading,
} from "../Components/Styles/Heading.Styles";
import { FlexColumnContainer, FlexContainer } from "./Styles/SignIn.Styles";

const Register = () => {
  const formInputs = [
    { name: "First Name", id: "firstname", type: "text", htmlFor: "firstname" },
    { name: "Last Name", id: "lastname", type: "text", htmlFor: "lastname" },
    { name: "Email", id: "email", type: "text", htmlFor: "email" },
    { name: "Password", id: "password", type: "password", htmlFor: "password" },
    {
      name: "Confirm Password",
      id: "confirmPassword",
      type: "text",
      htmlFor: "confirmPassword",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <FlexContainer>
          <FlexColumnContainer>
            <HeadingPrimary>Signup</HeadingPrimary>
            <SubHeading customMargin="3rem 0">
              We do not share your personal details with anyone.
            </SubHeading>
          </FlexColumnContainer>
          <Form>
            {formInputs.map((item) => (
              <FormItem key={item.id}>
                <Input id={item.id} type={item.type} required />
                <Label htmlFor={item.htmlFor}>{item.name}</Label>
              </FormItem>
            ))}
            <Button customMargin="3rem 0">Sign Up</Button>
          </Form>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
