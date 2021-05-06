import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image';
import './ProductCard.scss';

const ProductCard = React.memo(({ product, addCart }) => {
  const { name, imageURL, sku, description, price, disabled } = product;

  return (
    <article className='product-wrap'>
      <h2 className='product-header'>{name}</h2>
      <section className='product-detail-wrap'>
        <figure className='product-image'>
          <Image name={`products/${imageURL}`} alt={sku} />
        </figure>
        <figcaption className='product-description-wrap'>
          <p className='product-description'>{description}</p>
          <section className='product-price'>
            <button type='button' onClick={() => addCart(product)} disabled={!!disabled}>
              {!disabled ? `Buy Now @ Rs.${price}` : `In Cart @ RS.${price}`}
            </button>
          </section>
        </figcaption>
      </section>
      <section className='product-footer'>
        <p className='price-text'>MRP Rs.{price}</p>
        <button type='button' onClick={() => addCart(product)} disabled={!!disabled}>
          {!disabled ? `Buy Now` : `In Cart`}
        </button>
      </section>
    </article>
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
