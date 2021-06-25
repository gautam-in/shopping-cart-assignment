import styled from "styled-components";

const ProductTileStyles = styled.div`
  width: var(--productTileDesktopWidth);
  /* height: var(--productTileHeight); */
  border-bottom: 1px dotted var(--grey);
  background-color: var(--white);
  margin: 0.5rem 0.5rem 1rem;
  padding: 0.25rem;
  --max-lines: 4;

  .product-header {
    height: 70px;
  }
  .product-content {
    display: grid;
    grid-template-rows: 1fr;
  }
  .product-content img {
    max-width: 100%;
  }

  .product-desc {
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
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .image-container {
    width: 100%;
  }
  @media only screen and (max-width: 1023px) {
    width: var(--productTileTabletWidth);
    .product-header {
      height: 60px;
    }
    .product-content {
      display: grid;
      grid-template-columns: 505;
      grid-template-rows: 2fr 1fr;
    }
    .product-price {
      display: none;
    }
    .product-footer {
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: flex-end;
    }
    .product-footer button {
      width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    .product-header {
      height: 50px;
    }
    .product-content {
      grid-template-rows: 1fr;
    }
    .image-container {
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .product-footer {
      grid-column-start: 2;
      align-items: flex-start;
    }
  }
`;
export default ProductTileStyles;
