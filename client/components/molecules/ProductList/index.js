import { useState } from "react";
import styled from "styled-components";
import ProductItem from "../ProductItem";
import { sizes } from "../../../global/styles/sizes";

const ProductListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  padding: 0;

  @media (max-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${sizes.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const ProductList = ({ productsList }) => {
  if (!productsList.length) return null;
  return (
    <ProductListWrapper>
      {/* <nav>
        <button>Fruits & Vegetables</button>
      </nav> */}
      {productsList.map((productItem) => (
        <ProductItem key={productItem.id} productItem={productItem} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
