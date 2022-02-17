import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
