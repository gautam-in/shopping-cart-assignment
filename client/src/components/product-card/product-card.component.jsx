import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  ProductCardContainer,
  ProductCardButton,
  ProductDetailsMobileBlock,
  ProductDescription,
  ProductDetailsDesktopBlock,
  ProductPriceDetail,
} from './product-card.styled';
import { InvertedButton } from '../button/button.styles';

const ProductCardButtonWithPrice = ({ price }) => {
  return <InvertedButton>Buy Now @ Rs.{price}</InvertedButton>;
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductHandler = () => {
    addItemToCart(cartItems, product)
      .then((dispatchAction) => {
        toast.success('Item added to your cart successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });

        dispatch(dispatchAction);
      })
      .catch((error) => {
        toast.error('Failed to add item to your cart.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <ProductCardContainer>
      <h2> {product.name}</h2>
      <ProductDetailsMobileBlock>
        <img src={product.imageURL} alt={product.name} />
        <ProductDescription>
          <p>{product.description}</p>
          <ProductCardButtonWithPrice price={product.price} />
        </ProductDescription>
      </ProductDetailsMobileBlock>
      <ProductDetailsDesktopBlock>
        <p>{product.description}</p>

        <ProductPriceDetail>
          <span>Rs.{product.price}</span>
          <ProductCardButton onClick={addProductHandler}>
            Buy Now
          </ProductCardButton>
        </ProductPriceDetail>
      </ProductDetailsDesktopBlock>
    </ProductCardContainer>
  );
};

export default ProductCard;
