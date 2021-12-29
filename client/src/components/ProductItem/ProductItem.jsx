import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isDesktop, isTablet, isMobileOnly } from 'react-device-detect';

import Button from './../Button/Button';

import { addToCart } from './../../redux/Cart/actions';
import { selectCartItems } from './../../redux/Cart/selectors';
import { isItemAlreadyInCart } from '../../utils/helpers';

import {
  ItemCard,
  Title,
  ImgContainer,
  Description,
  Options,
  ItemInCart
} from './styles';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, description, imageURL, price, id } = item;
  const alreadyInCart = isItemAlreadyInCart(cartItems, id);
  return (
    <ItemCard>
      <Title>{name}</Title>
      <ImgContainer>
        <img src={imageURL} alt={`${name} product`} />
      </ImgContainer>
      <Description>{`${description.slice(0, 100)}${description.length > 100 ? '...' : ''} `}</Description>
      <Options>
        {(isDesktop && (!isMobileOnly || !isTablet)) && <p>Rs. {price}</p>}
        {alreadyInCart ? (
          <ItemInCart>
            Already in Cart
          </ItemInCart>
          ) : (
          <Button
            type="button"
            onClick={() => dispatch(addToCart(item))}>
              Buy Now {(!isDesktop && (isMobileOnly || isTablet)) && ` @ Rs. ${price}`}
          </Button>
        )}
      </Options>
    </ItemCard>
  );
}

export default ProductItem;