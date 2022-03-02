import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 0 100px;
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
  @media screen and (max-height: 830px) {
    height: 95vh;
    overflow-y: auto;
  }
`;
