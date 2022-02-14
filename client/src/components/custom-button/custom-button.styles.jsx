import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  min-width: ${(props) => (props.size ? `90%` : `165px`)};
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
