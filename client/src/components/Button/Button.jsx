import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding:  10px 15px;
  background-color: #BF2957;
  color: #fff;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;