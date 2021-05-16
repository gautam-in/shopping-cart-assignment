import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import CartItem from '../../molecules/CartItem/CartItem';
import LowestPrice from "../../../images/lowest-price.png";
import './Cart.scss';

const Cart = React.memo(({ showCart, toggleCartModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartData = useSelector(state => state.cart.cartList);
  const itemCount = useSelector(state => state.cart.cartItem);

  var totalPrice = cartData.reduce((acc, item) => {
    return acc + (item.count * item.price)
  }, 0);

  return (
    <div className={`cart-container ${showCart ? 'show-modal' : ''}`}>
      <div className='cart-drawer-modal' >
        <div className='cart-drawer-header-wrap'>
          <h3>
            My Cart <span>{itemCount ? itemCount : ''}</span>
          </h3>
          {window.innerWidth >= 770 ? <button type='button' className='close' aria-label='Close' onClick={toggleCartModal}>
            <span aria-hidden='true'>
              X
          </span>
          </button> : ""}
        </div>
        <div className="modal-body" >
          {cartData.length ? (
            <div className='cart-body-main'>
              <div className='cart-list-wrap'>
                <ul className='clearfix'>{cartData.map((item, index) => {
                  return <CartItem item={item} key={index} />
                })}</ul>
                <div className='lowest-price-wrpper'>
                  <img src={LowestPrice} alt='Lowest Price' />
                  <span>You won't find it cheaper anywhere</span>
                </div>
              </div>
            </div>
          ) : (
            <article className='cart-body-wrap'>
              <h5>No item in your cart</h5>
              <p>Your favourite items are just a click away</p>
            </article>
          )}</div>
        <div className='cart-footer-wrap'>
          {cartData.length ? (
            <>
              <div className='cart-footer-text'>Promo code can be applied on payment page</div>
              <button type='button' className="custom-button" >
                <span className='checkout-text-wrap'>Proceed to Checkout</span>
                <span className='checkout-price-wrap'>
                  Rs. {totalPrice}
                </span>
              </button>
            </>
          ) : (
            <button
              type='button'
              className="custom-button"
              onClick={() => {
                history.push('/products');
              }}
            >
              Start Shopping
            </button>
          )}
        </div>
      </div>
    </div>
  );
});


export default Cart;
