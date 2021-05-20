import { Container } from "./Header.styles";
import Logo from "images/logo.png";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
    </Container>
  );
};

export default Header;
