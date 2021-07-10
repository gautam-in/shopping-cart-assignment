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
      <ul className="cart-items">
        {cart.map((_, index) => (
          <CartItem
            item={_}
            key={_.item.id}
            updateQuantity={updateQuantity}
            index={index}
          />
        ))}
        <article className="cart__cheaper">
          <img src="/static/images/lowest-price.png" />
          You won't find it cheaper anywhere
        </article>
      </ul>
    );
  }

  function emptyCart() {
    return (
      <section className="empty-cart">
        <p>No items in your cart</p>
        <p>Your favourite items are just a click away.</p>
      </section>
    );
  }

  return (
    <div className="cart-modal">
      <section className="cart">
        <header className="cart-header">
          <h1 className="cart-no-of-items">My Cart ({cart.length} items)</h1>
          <button onClick={toggleCart} className="close-cart">
            X
          </button>
        </header>
        {cart.length <= 0 ? emptyCart() : renderCart()}
        <article className="cart-checkout">
          {cart.length > 0 && <p>Promo code can be applied on payment page</p>}
          <button
            onClick={toggleCart}
            className="checkout-button maroon-button"
          >
            {cart.length <= 0 ? 'Start Shopping' : 'Proceed to Checkout'}
          </button>
        </article>
      </section>
    </div>
  );
}

function CartItem({ item, updateQuantity, index }) {
  return (
    <li className="cart-item">
      <img className="cart-item-image" src={item.item.imageURL} />
      <p className="cart-item-detail">
        <h2 className="cart-item-name">{item.item.name}</h2>
        <section className="cart-item-description">
          <article className="cart-item-amount">
            <button
              className="maroon-button cart-item-qty-button"
              onClick={() => updateQuantity(index, item.qty - 1)}
            >
              -
            </button>
            <span className="cart-item-qty">{item.qty}</span>
            <button
              className="maroon-button cart-item-qty-button"
              onClick={() => updateQuantity(index, item.qty + 1)}
            >
              +
            </button>
            <span className="cart-item-cross">X</span>
            <p className="cart-item-price">Rs. {item.item.price}</p>
          </article>
          <article className="cart-item-total">
            Rs. {item.item.price * item.qty}
          </article>
        </section>
      </p>
    </li>
  );
}
