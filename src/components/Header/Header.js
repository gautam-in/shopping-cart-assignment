import { memo } from "react";
import Navigation from "components/Shared/Navigation";
import CartIcon from "components/Shared/CartIcon";
import SignRegister from "components/Shared/SignRegister";

import { Container } from "./Header.styles";
import Logo from "images/logo.png";

const Header = () => {
  return (
    <Container>
      <img className="logo" src={Logo} alt="logo" />
      <Navigation />
      <CartIcon />
      <SignRegister />
    </Container>
  );
};

export default memo(Header);
