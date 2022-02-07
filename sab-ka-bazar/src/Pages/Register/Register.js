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
import { FlexColumnContainer, FlexContainer } from "../SignIn/SignInElements";

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
