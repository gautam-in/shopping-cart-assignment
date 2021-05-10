import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom"
import CartItem from './CartItem';
import LowestPrice from "../../images/lowest-price.png";



const Cart = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

 
  const data = useSelector(state => state.cart.cartList);
  const itemCount = useSelector(state => state.cart.cartItem);
 

 



  return (
     <div className="cartContainer">
    <div className='cart-drawer-modal' >
      <div className='cart-drawer-header-wrap'>
        <h6>
          My Cart <span>{itemCount ?itemCount : ''}</span>
        </h6>
        <button type='button' className='close' aria-label='Close' >
          <span aria-hidden='true'>
            X
          </span>
        </button>
      </div>
      <div className="modal-body" >
      {data.length ? (
        <div className='cart-body-main'>
          <div className='cart-list-wrap'>
            <ul className='clearfix'>{data.map((item, index) => {
                                            return <CartItem item={item} key={index}/> })}</ul>
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
        {data.length ? (
          <>
            <div className='cart-footer-text'>Promo code can be applied on payment page</div>
            <button type='button' className="custom-button" >
              <span className='checkout-text-wrap'>Proceed to Checkout</span>
              <span className='checkout-price-wrap'>
                Rs.
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
