import React from "react";
import Card from "../card/card.component";
import { ProductItemContainer } from "./product-items.styles";

const ProductItems = ({ products }) => {
  return (
    <ProductItemContainer>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ProductItemContainer>
  );
};

export default ProductItems;
