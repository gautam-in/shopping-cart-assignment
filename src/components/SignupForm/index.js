import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

export default function SignupForm() {
  return (
    <Form>
      <Input required type="text" name="firstname" id="firstname" label="First Name" />
      <Input required type="text" name="lastname" id="lastname" label="Last Name" />
      <Input required type="email" name="email" id="email" label="Email" />
      <Input
        required
        type="password"
        name="password"
        id="password"
        label="Password"
      />
      <Input
        required
        type="password"
        name="confirmpassword"
        id="confirmpassword"
        label="Confirm Password"
      />
      <Button>Sign Up</Button>
    </Form>
  );
}
