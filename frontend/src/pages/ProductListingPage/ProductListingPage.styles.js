import styled from "styled-components";

export const ProductListingPageContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (min-width: 1200px) {
      width: 85%;
      margin: auto;
    }

`

export const ProductList = styled.ul`
  flex: 4;
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
`