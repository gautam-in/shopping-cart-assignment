import styled from 'styled-components';

import { GridMixin } from './mixins';

export const MainWrapper = styled.div`
  max-height: 400px;
  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    /* max-height: 300px; */
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    &:first-child {
      margin-top: 3rem;
    }
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-width: 100px;
  padding-bottom: 1rem;

  border-bottom: 1px dashed #e1e1e1;

  .buy_button_tablet {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .gap__div {
      display: none;
    }

    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    .gap__div {
      display: none;
    }

    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;

    max-height: 300px;

    img {
      height: 150px;
    }
  }
`;

export const ProductName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;

  line-height: 1.2;
  text-align: left;

  height: 50px;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: 40px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductMeta = styled.div`
  ${GridMixin('1fr', 'space-between', 'center')};
  .buy_button_mobile {
    display: none;
  }

  .product__description {
    font-size: 1rem;
    background-color: #e1e1e1;
    padding: 0.5rem;

    height: 90px;
    overflow: hidden;

    border-radius: 3px;
  }

  .product_purchase {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-top: 1rem;
  }

  .buy_button_desktop {
    width: 100px;
    margin: 0;
    background-color: var(--primaryPink);
  }

  .product_purchase_price {
    font-size: 1.2rem;
    letter-spacing: 0.1px;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .product_purchase_price {
      display: none;
    }

    .buy_button_desktop {
      display: none;
    }
    .buy_button_mobile {
      display: block;
      width: 100%;

      button {
        width: inherit;
        margin: 0;
        background-color: var(--primaryPink);
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    .product_purchase {
      display: none;
    }

    .product__description {
      height: 150px;
    }
  }
`;
