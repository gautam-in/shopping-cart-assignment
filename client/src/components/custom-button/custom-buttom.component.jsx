import React from "react";
import styled from "styled-components";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

// export const CustomButton = styled.button`
//   letter-spacing: 0.5px;
//   line-height: 1em;
//   padding: 20px 20px;
//   font-size: 1em;
//   text-transform: uppercase;
//   font-weight: 300;
//   cursor: pointer;
// `;

export default CustomButton;
