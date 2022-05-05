import React from 'react';
import { shorten } from '../utilities';

function CartItem(props) {
  const { name, imageURL, qty, price } = props.product;
  if (qty <= 0) return null;
  return (
    <section className='cart-item-container'>
      <section className='cart-left-block'>
        <section className='cart-item-img'>
          <img src={imageURL} alt={name} />
        </section>
        <section className='cart-item-details'>
          <h4>{shorten(name, 60)}</h4>
          <section className='cart-item-actions'>
            <button onClick={() => props.dec(props.product)}>-</button>
            <span>{qty}</span>
            <button onClick={() => props.inc(props.product)}>+</button>
            <span>x</span>
            <span>Rs.{price}</span>
          </section>
        </section>
      </section>
      <section className='cart-item-rate'>
        Rs.{qty*price}
      </section>
    </section>
  );
}

export default CartItem;
