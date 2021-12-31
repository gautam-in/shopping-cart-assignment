import React from "react";
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #eeeeee;
  font-size: 85%;
  padding: 20px 0px;
  width: 100%;
  p {
    width: 80%;
    margin: 0 auto;
    font-weight: bold;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    font-size: 65%;
    p {
      width: 95%;
      text-align: center;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright &copy; 2011 - 2021 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
    </FooterWrapper>
  );
}

export default Footer;