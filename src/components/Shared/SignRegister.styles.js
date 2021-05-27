import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 12.5rem;
  top: 0;
  .links {
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    color: #000000;
    margin-right: 1rem;
  }
  @media (max-width: 990px) {
    right: 0;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
