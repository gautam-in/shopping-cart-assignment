import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
