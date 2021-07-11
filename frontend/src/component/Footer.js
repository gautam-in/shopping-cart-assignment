import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: lightgray;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className='bar'>
        Copyright @2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
      </div>
    </FooterStyles>
  );
}
