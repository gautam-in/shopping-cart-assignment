/**
 *
 * ProductItem
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { ProductItemStyle } from 'styles/product-item-styles'

interface Props {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  price: number;
}

export const ProductItem = memo((props: Props) => {
  const { id, name, imageURL, description, price } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const addToCart = data => {
    console.log(data);
  };

  return (
    <article className="product-item" key={id}>
      <div className="product-item-title">{name}</div>
      <div className="product-info">
        <div className="product-img">
          <img src={imageURL} alt="imagename" />
        </div>
        <div className="product-desc">{description}</div>
      </div>
      <div className="product-purchase">
        <div className="product-mrp">MRP Rs.{price}</div>
        <button
          className="product-btn-buynow"
          aria-label="Buy Now"
          onClick={() => addToCart(props)}
        >
          Buy Now
        </button>
        <button
          className="product-btn-small-screen"
          aria-label="Buy Now"
          onClick={() => addToCart(props)}
        >
          Buy Now @ Rs.{price}
        </button>
      </div>
      <ProductItemStyle />
    </article>
  );
});

const Div = styled.div``;
