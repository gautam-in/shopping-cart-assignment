import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  ProductCardContainer,
  ProductDetail,
  ProductCardButton,
} from './product-card.styled';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <h2> {product.name}</h2>
      <img src={product.imageURL} alt="" />
      <p>{product.description}</p>
      <ProductDetail>
        <span>Rs.{product.price}</span>
        <ProductCardButton onClick={addProductHandler}>
          Buy Now
        </ProductCardButton>
      </ProductDetail>
    </ProductCardContainer>
  );
};

export default ProductCard;
