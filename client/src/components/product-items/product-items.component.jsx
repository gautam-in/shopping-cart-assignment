import React from "react";
import Card from "../card/card.component";
import { ProductItemContainer } from "./product-items.styles";

const ProductItems = ({ products, filteredProducts }) => {
  if (!products && !filteredProducts) return <h1>Loading</h1>;
  return (
    <ProductItemContainer>
      {filteredProducts.length < 1
        ? products.map((product) => <Card key={product.id} product={product} />)
        : filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
    </ProductItemContainer>
  );
};

export default ProductItems;
