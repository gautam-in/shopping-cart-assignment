import React, { useContext } from 'react';
import CartContext from '../CartContext';
import '../Styles/cart.css';

export default function ({ toggleCart }) {
  const { cart, setCart } = useContext(CartContext);

  function updateQuantity(index, newQty) {
    let newCart = [...cart];
    if (newQty <= 0) {
      newCart.splice(index, 1);
    } else {
      newCart[index] = { ...newCart[index], qty: newQty };
    }
    setCart(newCart);
  }

  function renderCart() {
    return (
      <div className="cart-items">
        {cart.map((_, index) => (
          <CartItem
            item={_}
            key={_.item.id}
            updateQuantity={updateQuantity}
            index={index}
          />
        ))}
        <div className="cart__cheaper">
          <img src="/static/images/lowest-price.png" />
          You won't find it cheaper anywhere
        </div>
      </div>
    );
  }

  function emptyCart() {
    return (
      <div className="empty-cart">
        <p>No items in your cart</p>
        <p>Your favourite items are just a click away.</p>
      </div>
    );
  }

  return (
    <div className="cart-modal">
      <div className="cart">
        <div className="cart-header">
          <h1 className="cart-no-of-items">My Cart ({cart.length} items)</h1>
          <div onClick={toggleCart} className="close-cart">
            X
          </div>
        </div>
        {cart.length <= 0 ? emptyCart() : renderCart()}
        <div className="cart-checkout">
          {cart.length > 0 && (
            <div>Promo code can be applied on payment page</div>
          )}
          <button
            onClick={toggleCart}
            className="checkout-button maroon-button"
          >
            {cart.length <= 0 ? 'Start Shopping' : 'Proceed to Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
}

function CartItem({ item, updateQuantity, index }) {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.item.imageURL} />
      <div className="cart-item-detail">
        <h2 className="cart-item-name">{item.item.name}</h2>
        <div className="cart-item-description">
          <div className="cart-item-amount">
            <button
              className="maroon-button cart-item-qty-button"
              onClick={() => updateQuantity(index, item.qty - 1)}
            >
              -
            </button>
            <div className="cart-item-qty">{item.qty}</div>
            <button
              className="maroon-button cart-item-qty-button"
              onClick={() => updateQuantity(index, item.qty + 1)}
            >
              +
            </button>
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
