import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = React.memo(({ product, addCart }) => {
  const { name, imageURL, sku, description, price, disabled } = product;

  return (
    <div className='product-wrap'>
      <div className='product-header'>{name}</div>
      <div className='product-detail-wrap'>
        <div className='product-image'>
          <img
            loading='lazy'
            src={require(`../../../static/images/products/${imageURL}`).default}
            alt={sku}
          />
        </div>
        <div className='product-description-wrap'>
          <div className='product-description'>{description}</div>
          <div className='product-price-wrap'>
            <button type='button' onClick={() => addCart(product)} disabled={!!disabled}>
              {!disabled ? `Buy Now @ RS.${price}` : `In Cart @ RS.${price}`}
            </button>
          </div>
          <div className='desktop-product-price-wrap'>
            <div className='desktop-product-price'>MRP RS.{price}</div>
            <button type='button' onClick={() => addCart(product)} disabled={!!disabled}>
              {!disabled ? `Buy Now` : `In Cart`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
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

export default Card;
