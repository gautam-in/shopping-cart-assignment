import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/actionCreators';
import './ProductCard.scss';
import * as Constants from '../../../shared/constants';
export default function ProductCard({ product }) {
  const productObj = product;
  const dispatch = useDispatch();
  const buyNowClickHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <article className='product-card' aria-label={'Product card for' + productObj.name}>
        <h3 aria-label={'product name is' + productObj.name} className='product-header'>
          {productObj.name}
        </h3>
        <section className='product-content'>
          <figure className='product-image'>
            <img
              src={productObj.imageURL}
              aria-label={'image of' + productObj.name}
              alt='pic'
              width='100%'
              height='auto'
              loading='lazy'
            />
          </figure>
          <figcaption className='product-detail'>
            <p aria-label={'product description is' + productObj.description}>
              {productObj.description}
            </p>
            <button
              aria-label={'BUY NOW button, the product price is' + productObj.price}
              className='btn-primary product-mobile-button'
              onClick={() => buyNowClickHandler(productObj)}
            >
              {Constants.BuyNow} @ {`${Constants.MRP} ${Constants.INR}.${productObj.price}`}
            </button>
          </figcaption>
        </section>
        <section className='product-tablet-button'>
          <button
            aria-label={'BUY NOW button, the product price is' + productObj.price}
            className='btn-primary product-mobile-button'
            onClick={() => buyNowClickHandler(productObj)}
          >
            {Constants.BuyNow} @ {`${Constants.INR}.${productObj.price}`}
          </button>
        </section>
        <section className='product-footer'>
          <p aria-label={'Product price for' + productObj.name + 'is' + productObj.price}>
            {Constants.MRP} {Constants.INR}.{productObj.price}
          </p>
          <button
            type='button'
            aria-label={'BUY NOW button'}
            className='custom-button'
            onClick={() => buyNowClickHandler(productObj)}
          >
            {Constants.BuyNow}
          </button>
        </section>
      </article>
    </>
  );
}
