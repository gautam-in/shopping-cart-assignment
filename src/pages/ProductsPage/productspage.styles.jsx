import styled from "styled-components";

export const ProductsPageContainer = styled.div`
  display: flex;
  margin: 0 10%;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 175px);
  gap: 32px;
  padding-left: 32px;
  @media (max-width: 800px) {
    padding: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    display: unset;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SidebarContainer = styled.div`
  width: 200px;
`;
