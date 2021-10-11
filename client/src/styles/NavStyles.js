import styled from "styled-components";
export const NavStyles = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    margin: 0 1rem;
  }
  @media (max-width: 480px) {
    a {
      display: none;
    }
  }
`;
