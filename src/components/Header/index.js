import React from "react";
import { Logo } from "..";
import { Wrapper, Container, Section } from "./styled";

import NavLinks from "../NavLinks";
import AuthLinks from "../AuthLinks";
import CartWrap from "../CartWrap";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Section row>
          <Logo />
          <NavLinks />
        </Section>
        <Section column>
          <AuthLinks />
          <CartWrap />
        </Section>
      </Container>
    </Wrapper>
  );
};
