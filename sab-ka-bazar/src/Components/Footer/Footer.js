import React from "react";
import { FooterElement } from "./FooterElements";
import { Container, Wrapper } from "../Containers/ContainerElements";

const Footer = () => {
  return (
    <Container bg="#e5e5e5">
      <Wrapper>
        <FooterElement>
          Copyright © 2011-2018 Sabka Bazar Grocery Supplies Pvt.Ltd
        </FooterElement>
      </Wrapper>
    </Container>
  );
};

export default Footer;
