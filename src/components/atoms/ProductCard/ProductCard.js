import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';

const ProductCard = React.memo(({ product, addCart }) => {
  const { name, imageURL, sku, description, price, disabled } = product;

  return (
    <div className='product-wrap'>
      <h2 className='product-header'>{name}</h2>
      <div className='product-detail-wrap'>
        <div className='product-image'>
          <img
            loading='lazy'
            src={require(`../../../../static/images/products/${imageURL}`).default}
            alt={sku}
            width='100%'
          />
        </div>
        <div className='product-description-wrap'>
          <div className='product-description'>{description}</div>
          <div className='product-price'>
            <button type='button' onClick={() => addCart(product)} disabled={!!disabled}>
              {!disabled ? `Buy Now @ Rs.${price}` : `In Cart @ RS.${price}`}
            </button>
          </div>
        </div>
      </div>
      <div className='product-footer'>
        <div className='price-text'>MRP Rs.{price}</div>
        <button type='button' onClick={() => addCart(product)} disabled={!!disabled}>
          {!disabled ? `Buy Now` : `In Cart`}
        </button>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
  }),
  addCart: PropTypes.func.isRequired
};

export default ProductCard;
