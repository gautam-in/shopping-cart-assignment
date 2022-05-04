import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
`;

export const CategoriesContainer = styled.div`
  background-color: lightgray;

  div {
    margin: 0 5px 5px 5px;
    padding-bottom: 2px;
    border-bottom: 1px solid gray;
    cursor: pointer;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`; 