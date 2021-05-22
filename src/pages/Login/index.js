import Header from "components/Header/Header";
import LoginBody from "components/LoginBody/LoginBody";
import Copyright from "components/Shared/Copyright";
import { Container } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Header />
      <LoginBody />
      <Copyright />
    </Container>
  );
};

export default Login;
