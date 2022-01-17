import React, { Component } from "react";
import "./CartItem.scss";
import ItemActions from "./ItemActions";

class CartItem extends Component {
  render() {
    const images = require.context("../../..", true);

    const { item } = this.props;
    return (
      <li className="cart-item">
        <img src={images(`.${item.imageURL}`)} alt={item.name} />
        <div className="item-details">
          <h1>{item.name}</h1>
          <ItemActions item={item} />
        </div>
        <div className="item-total">
          <p>Rs.{item.totalPrice}</p>
        </div>
      </li>
    );
  }
}

export default CartItem;
