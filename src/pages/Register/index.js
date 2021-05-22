import Header from "components/Header/Header";
import SignUpBody from "components/SignUpBody/SignUpBody";
import Copyright from "components/Shared/Copyright";
import { Container } from "./Register.styles";

const Register = () => {
  return (
    <Container>
      <Header />
      <SignUpBody />
      <Copyright />
    </Container>
  );
};

export default Register;
