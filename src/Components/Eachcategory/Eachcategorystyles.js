import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  box-shadow: 0px 8px 11px 0px #00000014;
  flex-direction: ${(props) => (props.reverse ? "row" : "row-reverse")};
`;
