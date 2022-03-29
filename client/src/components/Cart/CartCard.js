// react
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @name CartCard
 * @param {product} product The item to show in Cart
 * @returns JSX for products available in Cart
 */
const CartCard = ({ product, buttonHandler }) => {
  const { name, imageURL, price, noOfPeices } = product;
  return (
    <div className="cart-card">
      <section className="cart-card__left-section">
        <img src={imageURL} alt={name} />
      </section>
      <section className="cart-card__right-section">
        <header className="cart-card__header">
          <h3 className="cart-card__title">{name}</h3>
        </header>
        <footer className="cart-card__footer">
          <div className="cart-card__no-of-peices">
            <button
              className="cart-card__remove-peices"
              onClick={() => buttonHandler(product, true)}>
              -
            </button>
            <span>{noOfPeices}</span>
            <button className="cart-card__add-peices" onClick={() => buttonHandler(product)}>
              +
            </button>
            <span>X {price}</span>
          </div>
          <div className="cart__card__total-price">{noOfPeices * price}</div>
        </footer>
      </section>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
  buttonHandler: PropTypes.func
};

export default CartCard;
