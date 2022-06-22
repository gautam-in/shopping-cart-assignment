import Button from '../Button';
import React from 'react'
import { StyledProductCard } from './ProductCard.styled';
import { addProductToCart } from '../../../redux/slices/cart';
import { getProductFilteredByProductId } from '../../../services/ApiService';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const ProductCard = ({productId,imageSrc,name,description,price}) => {
  const dispatch = useDispatch();

  const productHandler = () => {
    dispatch(getProductFilteredByProductId({product_id:productId})).then(unwrapResult).then((productList) => {
      dispatch(addProductToCart(productList));
    }).catch((error) => error);
  }

  return (
    <StyledProductCard id={productId} className='product-card'>
        <h3>{name}</h3>
        <img src={imageSrc} alt={name} />
        <p>{description}</p>
        <div className="card-price">
          <span>MRP Rs.{price}</span>
          <Button onClick={productHandler}>Buy Now</Button>
        </div>
    </StyledProductCard>
  )
}

export default ProductCard;