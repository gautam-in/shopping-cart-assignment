import React, { Component } from "react";
import { CartContext } from "../../../services/cartContext";
import cartServices from "../../../services/cartServices";
import "./CartItem.scss";

class CartItem extends Component {
  static contextType = CartContext;

  addItems = () => {
    cartServices.addToCart({ ...this.props.item });
    const updateCart = this.context;
    updateCart();
  };

  removeItems = () => {
    cartServices.removeFromCart({ ...this.props.item });
    const updateCart = this.context;
    updateCart();
  };

  render() {
    const images = require.context("../../..", true);

    const { item } = this.props;
    return (
      <li className="cart-item">
        <img src={images(`.${item.imageURL}`)} alt={item.name} />
        <div className="item-details">
          <h1>{item.name}</h1>
          <p className="item-count-price">
            <span className="item-count-section">
              <button onClick={this.addItems} className="add-count">
                +
              </button>
              <span className="item-count">{item.count}</span>
              <button onClick={this.removeItems} className="remove-count">
                -
              </button>
            </span>{" "}
            x Rs.{item.price}
          </p>
        </div>
        <div className="item-total">
          <p>Rs.{item.totalPrice}</p>
        </div>
      </li>
    );
  }
}

export default CartItem;
