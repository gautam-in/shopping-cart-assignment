import React from "react";
import { ArrowContainer } from "./arrow.styles";
const Arrow = ({ type, children, onClick }) => {
  return (
    <ArrowContainer onClick={onClick} align={type}>
      {children}
    </ArrowContainer>
  );
};

export default Arrow;
