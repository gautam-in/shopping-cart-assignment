import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0.3rem;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: "Consolas";
  margin-right: 8px;
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: 2px underline;
  }
`;
