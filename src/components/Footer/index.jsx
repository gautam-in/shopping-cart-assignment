import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: rgb(234, 234, 234);
  display: flex;
  padding: 10px;
  align-items: center;
  padding-inline: 10%;
`;


export default Footer;
