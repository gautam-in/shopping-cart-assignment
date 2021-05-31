import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import CartItem from '../../molecules/CartItem/CartItem';
import './Cart.scss';
import * as Constants from '../../../shared/constants';

const Cart = React.memo(({ showCart, toggleCartModal }) => {
  const location = useLocation();
  const history = useHistory();
  const cartData = useSelector((state) => state.cart.cartList);
  const itemCount = useSelector((state) => state.cart.cartItem);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    var total = cartData.reduce((acc, item) => {
      return acc + item.count * item.price;
    }, 0);
    setTotalPrice(total);
  }, [itemCount]);

  const cartItemList =
    cartData &&
    cartData.map((item) => {
      return <CartItem item={item} key={item.id} />;
    });
  return (
    <section
      className={`cart-container ${showCart || location.pathname == '/cart' ? 'show-modal' : ''}`}
    >
      <section className='cart-drawer-modal' aria-label='cart modal'>
        <header
          className={`${cartData.length ? 'cart-drawer-header-wrap' : 'empty-cart-drawer-header'}`}
          aria-label='cart header'
        >
          <h3 aria-label='My Cart header'>
            {Constants.MyCart}{' '}
            <span>
              {itemCount
                ? itemCount === 1
                  ? ` ( ${itemCount} Item )`
                  : ` ( ${itemCount} Items )`
                : ''}
            </span>
          </h3>
          {window.innerWidth >= 770 ? (
            <button
              type='button'
              className='close'
              aria-label='Close Icon'
              onClick={toggleCartModal}
            >
              <span aria-hidden='true'>&#x2715;</span>
            </button>
          ) : (
            ''
          )}
        </header>
        {cartData.length ? (
          <section className='modal-body filled-cart-body'>
            <ul className='clearfix'>{cartItemList}</ul>
            <section className='lowest-price'>
              <img src='static/images/lowest-price.png' alt='Lowest Price' loading='lazy' />
              <span>{Constants.LowestPrice}</span>
            </section>
          </section>
        ) : (
          <section className='modal-body empty-cart-body'>
            <h5 aria-label='No item in your cart'>{Constants.CartEmpty}</h5>
            <p aria-label='Your favourite items are just a click away'>
              {Constants.CartEmptyFavItems}
            </p>
          </section>
        )}
        {cartData.length ? (
          <footer className='cart-footer-wrap'>
            <p className='cart-footer-text'>{Constants.PromoCode}</p>
            <button
              type='button'
              className='custom-button checkout-button'
              onClick={() => {
                toggleCartModal();
                history.push('/products');
              }}
              aria-label='Click on this button to checkout'
            >
              <span className='checkout-text-wrap'>{Constants.Checkout}</span>
              <output>
                <span className='checkout-price-wrap'>Rs. {totalPrice}</span>
                <span className='arrow-checkout-icon'>{'>'}</span>
              </output>
            </button>
          </footer>
        ) : (
          <footer className='empty-cart-footer-wrap'>
            <button
              type='button'
              className='custom-button empty-cart-button'
              onClick={() => {
                toggleCartModal();
                history.push('/products');
              }}
            >
              {Constants.StartShopping}
            </button>
          </footer>
        )}
      </section>
    </section>
  );
});

export default Cart;
