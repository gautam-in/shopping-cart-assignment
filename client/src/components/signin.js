import {
  SignInStyles,
  FromGroup,
  Label,
  Input,
  LoginButton,
} from "../styles/SignInStyles";

export default function SigIn() {
  return (
    <SignInStyles>
      <div>
        <h2>LOGIN FORM</h2>
        <p>Get access to your Orders,Wishlist and Recommendations</p>
      </div>
      <section>
        <FromGroup>
          <Input type="text" name="uname" required />
          <Label>Email</Label>
        </FromGroup>
        <FromGroup>
          <Input type="password" name="psw" required />
          <Label>Password</Label>
        </FromGroup>
        <LoginButton type="submit">Login</LoginButton>
      </section>
    </SignInStyles>
  );
}
