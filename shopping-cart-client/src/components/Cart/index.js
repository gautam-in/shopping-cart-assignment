import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addToCart, removeCartitem } from '../../actions/cart';
import './Cart.scss';
class Cart extends Component {
  constructor(props) {
    super(props);
  }

  staticMsgs = {
    noItems: 'No items in your cart',
    favItems: 'Your favourite items are just a click away',
    pCodes: 'Promo code can be applied on the checkout page.',
  };
  handleCartRemove = (item) => {
    this.props.dispatch(removeCartitem(item));
  };
  handleCartUpdate = (item) => {
    this.props.dispatch(addToCart(item));
  };

  render() {
    const cart = this.props.cart;
    return (
      <div className="cart-container">
        <div className="header-container">
          <h1 className="heading">
            My cart {cart.length > 0 ? `( ${cart.length} Item )` : null}
          </h1>
          <button className="btn-close" onClick={this.props.toggleCart} />
        </div>
        <ul className="cart-list">
          {cart.length > 0 ? (
            cart.map((item) => (
              <li className="cart_list-item" key={item.id}>
                <img
                  src={item.imageURL}
                  className="cart_list-img"
                  alt={item.name}
                />
                <div className="cart_list-details">
                  <h2 className="cart_list-name truncate">{item.name}</h2>
                  <button
                    className="btn-decrement"
                    onClick={() => {
                      this.handleCartRemove(item);
                    }}
                  >
                    -
                  </button>
                  <span className="quantity">{item.qty}</span>
                  <button
                    className="btn-increment"
                    onClick={() => {
                      this.handleCartUpdate(item);
                    }}
                  >
                    +
                  </button>
                  <span className="into-qty">X</span>
                  <span className="cart_list-price">₹ {item.price}</span>
                  <span className="cart_list-item-total">
                    ₹ {item.qty * item.price}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <div className="no-item-text">
              <b>{this.staticMsgs.noItems}</b>
              <p>{this.staticMsgs.favItems}</p>
            </div>
          )}
        </ul>
        <div className="checkout">
          <p className="checkout-heading">{this.staticMsgs.pCodes}</p>
          {cart.length > 0 ? (
            <button
              type="button"
              name="button"
              className="btn-cart-checkout checkout-button"
              onClick={this.props.toggleCart}
            >
              <span className="checkout-text">Proceed to checkout</span>
              <span className="checkout-price">
                {' '}
                Rs.{' '}
                {cart.reduce(function (total, item) {
                  return total + item.price * item.qty;
                }, 0)}
              </span>
            </button>
          ) : (
            <button
              type="button"
              name="button"
              className="btn-cart-checkout checkout-button"
              onClick={this.props.toggleCart}
            >
              <span className="checkout-text">Start Shopping</span>
            </button>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    toggleCart: ownProps.toggleCart,
    cart: state.cart.cart,
    totalItem: state.cart.totalItems,
  };
}

export default connect(mapStateToProps)(Cart);
