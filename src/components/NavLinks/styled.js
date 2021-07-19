import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 8rem 0 8rem;
`;
export const StyledLink = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Consolas";
  text-decoration: none;
  margin-right: 20px;
  position: relative;
  top: 15px;
  cursor: pointer;
  
  &:hover{
    text-decoration: 2px underline;
  }
`;
