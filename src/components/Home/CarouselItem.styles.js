import styled from "styled-components";

export const Container = styled.div`
  img {
    height: 200px;
    @media (max-width: 990px) {
      height: 150px;
    }
    @media (max-width: 650px) {
      height: 100px;
    }
  }
`;
