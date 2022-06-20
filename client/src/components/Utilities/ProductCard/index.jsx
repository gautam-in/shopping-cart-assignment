import React from 'react'
import Button from '../Button';
import { StyledProductCard } from './ProductCard.styled';

const ProductCard = ({key,imageSrc,name,description,price,category}) => {
  return (
    <StyledProductCard key={key} className='product-card'>
        <h3>{name}</h3>
        <img src={imageSrc} alt={name} />
        <p>{description}</p>
        <div className="card-price">
          <span>MRP Rs.{price}</span>
          <Button>Buy Now</Button>
        </div>
    </StyledProductCard>
  )
}

export default ProductCard;