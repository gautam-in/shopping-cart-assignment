import React from 'react';
import {
  ProductCardContainer,
  ProductDetail,
  ProductCardButton,
} from './product-card.styled';

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <h2> {product.name}</h2>
      <img src={product.imageURL} alt="" />
      <p>{product.description}</p>
      <ProductDetail>
        <span>Rs.{product.price}</span>
        <ProductCardButton>Buy Now </ProductCardButton>
      </ProductDetail>
    </ProductCardContainer>
  );
};

export default ProductCard;
