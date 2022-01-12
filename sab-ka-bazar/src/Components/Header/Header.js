import React from "react";
import { Container, Wrapper } from "../Containers/ContainerElements";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <header>
          <Navbar />
        </header>
      </Wrapper>
    </Container>
  );
};

export default Header;
