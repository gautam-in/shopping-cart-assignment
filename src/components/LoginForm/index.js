import React from "react";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

export default function LoginForm() {
  return (
    <Form>
      <Input required type="email" name="email" id="email" label="Email" />
      <Input
        required
        type="password"
        name="password"
        id="password"
        label="Password"
      />
      <Button>Login</Button>
    </Form>
  );
}
