import React, { useContext } from 'react';
import CartContext from '../CartContext';
import '../Styles/cart.css';

export default function ({ toggleCart }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-modal">
      <div className="cart">
        <div className="cart-header">
          <h1 className="cart-no-of-items">My Cart ({cart.length} items)</h1>
          <div onClick={toggleCart} className="close-cart">
            X
          </div>
        </div>
        <div className="cart-items">
          {cart.map((_) => (
            <CartItem item={_} key={_.id} />
          ))}
          <div className="cart__cheaper">
            <img src="/static/images/lowest-price.png" />
            You won't find it cheaper anywhere
          </div>
        </div>
        <div className="cart-checkout">
          <div>Promo code can be applied on payment page</div>
          <button
            onClick={toggleCart}
            className="checkout-button maroon-button"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.item.imageURL} />
      <div className="cart-item-detail">
        <h2 className="cart-item-name">{item.item.name}</h2>
        <div className="cart-item-description">
          <div className="cart-item-amount">
            <button className="maroon-button cart-item-qty-button">-</button>
            <div className="cart-item-qty">{item.qty}</div>
            <button className="maroon-button cart-item-qty-button">+</button>
            <div className="cart-item-cross">X</div>
            <div className="cart-item-price">Rs. {item.item.price}</div>
          </div>
          <div className="cart-item-total">
            Rs. {item.item.price * item.qty}
          </div>
        </div>
      </div>
    </div>
  );
}
