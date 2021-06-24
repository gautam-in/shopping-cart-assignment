import { useEffect } from "react";
import { signOut } from "helpers/saveUser";
import SignUpBody from "components/SignUpBody/SignUpBody";
import { Container } from "./Register.styles";

const Register = () => {
  useEffect(() => {
    signOut();
  }, []);
  return (
    <Container>
      <SignUpBody />
    </Container>
  );
};

export default Register;
