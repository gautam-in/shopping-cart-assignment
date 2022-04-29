import React from 'react';
import "./CartItem.css";

function CartItem(props) {
  //const { name, imageURL, qty, price } = props.product;
  if (props.product.qty <= 0) return null;
  return (
    <section className='cart-item'>
      <section className='cart-left-block'>
        <section className='cart-item-img'>
          <img src={props.product.imageURL} alt={props.product.name} />
        </section>
        <section className='cart-item-details'>
          <h4>{props.product.name}</h4>
          <section className='cart-item-actions'>
            <button onClick={() => props.decrement(props.product)}>-</button>
            <span>{props.product.qty}</span>
            <button onClick={() => props.increment(props.product)}>+</button>
            <span>x</span>
            <span>Rs.{props.product.price}</span>
          </section>
        </section>
      </section>
      <section className='cart-item-rate'>
        Rs.{props.product.qty*props.product.price}
      </section>
    </section>
  );
}

export default CartItem;
