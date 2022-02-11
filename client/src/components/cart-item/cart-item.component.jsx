import React from 'react';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { addItem, decrement } from '../../redux/cart/cart.actions';
import './cart-item.styles.scss';

const CartItem = ({ item, decrement, addItem }) => {
  const { imageURL, price, name, quantity } = item;
  return (
    <>
      {quantity > 0 && (
        <div className="cart-item">
          <img src={imageURL} alt="" />
          <div className="item-details">
            <span className="name">{name}</span>
            <span className="quantity">
              <FontAwesomeIcon
                icon={faMinusCircle}
                onClick={() => decrement(item)}
              />
              <span className="value"> {quantity}</span>
              <FontAwesomeIcon
                icon={faPlusCircle}
                onClick={() => addItem(item)}
              />
              <span className="price">&times; ${price}</span>
            </span>
          </div>
          <span className="cart-total">${quantity * price}</span>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  decrement: (item) => dispatch(decrement(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
