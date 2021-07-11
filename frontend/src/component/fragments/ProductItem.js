import React, { useContext } from 'react';
import styled from 'styled-components';

import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons';
import { CartContext } from '../../context/CartContext';

const ProductItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  box-shadow: 0px 3px 6px 1px #bbbbbb;
  .imgDesc {
    display: flex;
    height: 80%;
  }
  h5 {
    height: 10%;
    margin: 0 0 5px 0;
    text-align: left;
  }
  img {
    width: 40%;
    height: 100%;
    padding: 1rem;
  }
  p {
    text-align: left;
    font-size: 12px;
    line-height: 1.3;
    padding: 1rem;
    background-color: lightGray;
  }
  .Buy-Now {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 600;
    .qty {
      margin: 0.2rem;
      font-size: 1rem;
    }
    button {
      height: 3rem;
    }
    .shortButton {
      width: 2.6rem;
    }
  }
  @media only screen and (min-width: 600px) {
    padding: 1rem 1rem 1rem 0rem;
    box-shadow: 5px 1px 3px -3px #bbbbbb;
    border-bottom: 1px dashed;
    .imgDesc {
      img {
        width: 40%;
        height: 70%;
      }
      p {
        height: 90%;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    .imgDesc {
      display: flex;
      flex-direction: column;
      height: 80%;
      img {
        height: 30%;
        width: 100%;
      }
      p {
        height: 65%;
      }
    }
    .Buy-Now {
      font-size: 8px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .imgDesc {
      img {
        width: 90%;
        height: 30%;
      }
    }
  }
`;

export default function ProductItem({ product, handleAlert }) {
  const { addProduct, cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const qty = cartItems
    .map((item) => (item.id === product.id ? item.quantity : null))
    .filter((e) => e !== null)[0];

  const handleAddToCart = () => {
    (async function getProducts() {
      const data = await fetch('http://localhost:5000/addToCart', {
        method: 'POST',
      }).then((res) => res.json());
      handleAlert(data.response, data.responseMessage);
      addProduct(product);
    })();
  };

  return (
    <ProductItemStyles className='ProductItem'>
      <h5>{product.name}</h5>
      <div className='imgDesc'>
        <img
          key={product.id}
          src={`..${product.imageURL}`}
          alt={product.name}
        />
        <p>{product.description}</p>
      </div>
      <div className='Buy-Now'>
        <span>MRP Rs.{product.price}</span>
        <div>
          {isInCart(product) && (
            <div className='productQuantity'>
              {qty > 0 && (
                <button
                  className='shortButton'
                  onClick={() => increase(product)}>
                  <PlusCircleIcon width={'10px'} />
                </button>
              )}
              <span className='qty'>{qty}</span>
              {qty > 1 && (
                <button
                  className='shortButton'
                  onClick={() => decrease(product)}>
                  <MinusCircleIcon width={'10px'} />
                </button>
              )}
              {qty === 1 && (
                <button
                  className='shortButton'
                  onClick={() => removeProduct(product)}>
                  <TrashIcon width={'10px'} />
                </button>
              )}
            </div>
          )}

          {!isInCart(product) && (
            <button
              onClick={() => handleAddToCart(product)}
              className='btn btn-primary btn-sm'>
              Buy Now
            </button>
          )}
        </div>
      </div>
    </ProductItemStyles>
  );
}
