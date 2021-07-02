import styled from "styled-components";

export const ProductHeader = styled.div`
  height: 70px;
  @media (max-width: 1023px) {
    height: 60px;
    }
  @media (max-width: 767px) {
    height: 50px;
  }
  `;

export const ProductContent = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  img {
    max-width: 100%;
  }
  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: 505;
    grid-template-rows: 2fr 1fr;
    }
  @media (max-width: 767px) {
    grid-template-rows: 1fr;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    grid-row-start: 1;
    grid-row-end: 2;
  }
  `;
export const ProductDesc = styled.div`
  background-color: var(--lightestgrey);
  font-size: 0.8rem;
  font-weight: 600;
  margin: 1rem 0;
  min-height: calc(1.2rem * var(--max-lines));
  max-height: calc(1.2rem * var(--max-lines));
  overflow: hidden;
  padding: 1%;
  p {
    margin: 0;
    display:-webkit-box;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical; 
    overflow:hidden;
  }
  `;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    grid-column-start: 1;
    grid-column-end: 3;
    align-self: flex-end;
    button {
    width: 100%;
    }
    .product-price {
      display: none;
    }
  }
  @media (max-width: 767px) {
    grid-column-start: 2;
    align-items: flex-start;
  }
  `;
export const ProductStyles = styled.div`
  border-bottom: 1px dotted var(--grey);
  background-color: var(--white);
  margin: 0.5rem 0.5rem 1rem;
  padding: 0.25rem;
  width: var(--productDesktopWidth);
  --max-lines: 4;
  @media only screen and (max-width: 1023px) {
    width: var(--productTabletWidth);
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

