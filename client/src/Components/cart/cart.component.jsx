import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addItem, removeItem } from "../../reducer/cart/cart.actions";

import "./cart.styles.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className='cart-page'>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <div className='empty-cart-title'>No items in your cart</div>
          <div className='empty-cart-desc'>
            Your favourite items are just a click away
          </div>
          <button
            className='btn-cart btn-bottom'
            onClick={() => navigate("/products")}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className='cart-items-container'>
          <div className='cart-title'>
            <p>My Cart ({cartItems.length} items)</p>
          </div>
          <div className='cart-items-list'>
            {cartItems.map((item) => (
              <div key={item.id} className='cart-item-container'>
                <div className='cart-item'>
                  <img src={item.imageURL} alt={item.name} />
                  <div className='item-desc'>
                    <div>{item.name}</div>
                    <div className='button-container'>
                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className='btn-inc-dec'
                      >
                        -
                      </button>
                      <div className='item-counter'>{item.quantity}</div>
                      <button
                        onClick={() => dispatch(addItem(item))}
                        className='btn-inc-dec'
                      >
                        +
                      </button>
                      <div className='item-price'>X&nbsp; Rs.{item.price}</div>
                    </div>
                  </div>
                  <div className='item-total'>
                    Rs.{item.price * item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='cart-footer'>
            <p>Promo code can be applied on payment page</p>
            <button onClick={() => navigate("/")} className='btn-cart'>
              <div className='btn-container'>
                <div className='checkout-title'>Proceed to Checkout</div>
                <div className='cart-total-price'>Rs.{totalPrice} &gt;</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
