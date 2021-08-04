import React, { useContext } from 'react';
import styled from 'styled-components';

import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons';
import { CartContext } from '../../context/CartContext';

const CartItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px 1px #e2e2e2;
  margin: 2% 0%;
  padding: 1%;
  .cartItemImg {
    margin-right: 4%;
    img {
      width: 6rem;
    }
  }
  button {
    width: auto;
    margin: 1rem;
    border-radius: 25px;
  }
  .cartItemDetail {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    h5 {
      margin: 0;
    }
  }
  .itemQuantity {
    display: flex;
    align-items: center;
  }
  .multiply {
    margin: 0 10px;
  }
`;

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <CartItemStyles>
      <div className='cartItemImg'>
        <img
          alt={product.name}
          src={product.imageURL}
          className='img-fluid d-block'
        />
      </div>
      <div className='cartItemDetail'>
        <h5>{product.name}</h5>
        <div className='itemQuantity'>
          <button onClick={() => increase(product)}>
            <PlusCircleIcon width={'20px'} />
          </button>
          <span>{product.quantity}</span>
          {product.quantity > 1 && (
            <button onClick={() => decrease(product)}>
              <MinusCircleIcon width={'20px'} />
            </button>
          )}
          {product.quantity === 1 && (
            <button onClick={() => removeProduct(product)}>
              <TrashIcon width={'20px'} />
            </button>
          )}
          <span className='multiply'>&#10006;</span>
          <span>Rs.{product.price} </span>
        </div>
      </div>
      <div>
        <span>Rs.{product.quantity * product.price} </span>
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
