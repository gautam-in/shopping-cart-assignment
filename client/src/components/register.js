import {
  SignInStyles,
  FromGroup,
  Label,
  Input,
  LoginButton,
} from "../styles/SignInStyles";

export default function Register() {
  return (
    <SignInStyles>
      <div>
        <h2>Signup</h2>
        <p>We do not share your personal deatils with anyone.</p>
      </div>
      <section>
        <FromGroup>
          <Input type="text" name="firstName" required />
          <Label>First Name</Label>
        </FromGroup>
        <FromGroup>
          <Input type="text" name="lastName" required />
          <Label>Last Name</Label>
        </FromGroup>
        <FromGroup>
          <Input type="text" name="email" required />
          <Label>Email</Label>
        </FromGroup>
        <FromGroup>
          <Input type="password" name="password" required />
          <Label>Password</Label>
        </FromGroup>
        <FromGroup>
          <Input type="password" name="confirmpassword" required />
          <Label>Confirm Password</Label>
        </FromGroup>
        <LoginButton type="submit">Signup</LoginButton>
      </section>
    </SignInStyles>
  );
}
