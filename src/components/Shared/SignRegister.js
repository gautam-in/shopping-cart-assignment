import { Container } from "./SignRegister.styles";
import { Link } from "react-router-dom";

const SignRegister = () => {
  return (
    <Container>
      <Link className="links" to="/">
        SignIn
      </Link>
      <Link className="links" to="/register">
        Register
      </Link>
    </Container>
  );
};

export default SignRegister;
