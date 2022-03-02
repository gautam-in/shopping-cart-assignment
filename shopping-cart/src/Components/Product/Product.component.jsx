import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  ProductContainer,
  ProductImage,
  Title,
  Description,
  Price,
  ProductBtn,
  AtPrice,
} from "./Product.styles";

const Product = ({ product }) => {
  const { name, imageURL, description, price } = product;
  let width = window.innerWidth;
  const dispatch = useDispatch();
  return (
    <ProductContainer>
      <Title>{name}</Title>
      <ProductImage className="product-img" src={imageURL} alt={name} />
      <Description>{description}</Description>
      <Price>
        <span>MRP Rs.{price}</span>
        <ProductBtn onClick={() => dispatch(addItem(product))}>
          Buy Now <AtPrice> @ Rs.{price}</AtPrice>
        </ProductBtn>
      </Price>
    </ProductContainer>
  );
};

export default Product;
