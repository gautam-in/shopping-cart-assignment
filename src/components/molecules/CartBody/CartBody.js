import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image';
import CartItem from '../../atoms/CartItem';
import './CartBody.scss';

const CartBody = ({ data, cartQuantity }) => {
  const cartList =
    data &&
    data.map((cartProduct) => {
      return (
        <CartItem
          key={cartProduct.id}
          product={cartProduct}
          onClick={(status, product) => cartQuantity(status, product)}
        />
      );
    });

  return (
    <>
      {data && data.length ? (
        <section className='cart-body'>
          <ul>{cartList}</ul>
          <section className='lowest-price'>
            <Image name={'lowest-price.png'} alt='Lowest Price' />
            <p>You won't find it cheaper anywhere</p>
          </section>
        </section>
      ) : (
        <section className='no-cart-items-body'>
          <h5>No item in your cart</h5>
          <p>Your favourite items are just a click away</p>
        </section>
      )}
    </>
  );
};

CartBody.propTypes = {
  data: PropTypes.array.isRequired,
  cartQuantity: PropTypes.func.isRequired
};
export default CartBody;
