import React from 'react';
import { useDispatch } from 'react-redux';

import Button from './../Button/Button';

import { addToCart } from './../../redux/Cart/actions';

import {
  ItemCard,
  Title,
  ImgContainer,
  Description,
  Options
} from './styles';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, description, imageURL, price } = item;
  return (
    <ItemCard>
      <Title>{name}</Title>
      <ImgContainer>
        <img src={imageURL} alt={`${name} product`} />
      </ImgContainer>
      <Description>{`${description.slice(0, 100)}${description.length > 100 ? '...' : ''} `}</Description>
      <Options>
        <p>Rs. {price}</p>
        <Button
          type="button"
          onClick={() => dispatch(addToCart(item))}>
            Buy Now
        </Button>
      </Options>
    </ItemCard>
  );
}

export default ProductItem;