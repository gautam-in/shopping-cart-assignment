import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CartItem from '../component/fragments/CartItem';
import { CartContext } from '../context/CartContext';

const CartStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 0;
  box-shadow: 5px 1px 3px -3px #bbbbbb;
  h5 {
    height: 15%;
    margin: 0 0 5px 0;
    text-align: left;
  }
  img {
    height: 30%;
  }
  p {
    height: 45%;
    text-align: left;
    font-size: 13px;
    line-height: 1.2;
    padding: 1rem;
    background-color: lightGray;
  }
  .checkoutButton {
    /* position: absolute;
    left: 0;
    width: 100%;
    background: #ffffff; */
    padding: 9px;
    button {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
    }
    img {
      height: 15px;
      //fill: #bbbbbb;
      //filter: brightness(0.5) sepia(1) hue-rotate(140deg) saturate(6);
    }
  }

  .EmptyCart {
    padding: 9px;
  }
`;

const TitleStyle = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px 1px #e2e2e2;
  margin: 2% 0%;
  padding: 1%;
`;

const LowestPriceAd = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px 1px #e2e2e2;
  margin: 2%;
  padding: 1%;
  img {
    margin: 0% 4%;
  }
`;

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useContext(CartContext);

  return (
    <CartStyles>
      <div className='Cart'>
        <div className='CartItems'>
          {cartItems.length > 0 ? (
            <>
              <TitleStyle>
                My Cart ({itemCount} {itemCount > 1 ? 'items' : 'item'})
              </TitleStyle>
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
              <LowestPriceAd>
                <img src='./lowest-price.png' alt='Lowest Price Logo'></img>
                <span>You won't find it cheaper anywhere</span>
              </LowestPriceAd>
            </>
          ) : (
            <div className='EmptyCart'>
              <h2>No item in your cart</h2>
              <span>Your favourite items are just a click away</span>
              <Link to='/products'>
                <button>Start Shopping</button>
              </Link>
            </div>
          )}

          {checkout && (
            <div className='CheckoutSuccess'>
              <p>Checkout successfull</p>
              <Link to='/products'>BUY MORE</Link>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className='checkoutButton'>
            <button onClick={handleCheckout}>
              Proceed to Checkout
              <span>
                Rs.{total} {' >'}
              </span>
            </button>
            <button onClick={clearCart}>Clear</button>
          </div>
        )}
      </div>
    </CartStyles>
  );
};

export default Cart;
