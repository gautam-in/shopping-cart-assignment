import { useEffect } from "react";
import { signOut } from "helpers/saveUser";
import LoginBody from "components/LoginBody/LoginBody";
import { Container } from "./Login.styles";

const Login = () => {
  useEffect(() => {
    signOut();
  }, []);
  return (
    <Container>
      <LoginBody />
    </Container>
  );
};

export default Login;
