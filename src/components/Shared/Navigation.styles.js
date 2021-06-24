import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  right: 8rem;
  bottom: 1rem;
  .links {
    text-decoration: none;
    color: grey;
    font-weight: 600;
    margin-right: 1rem;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
