import React, { Component } from "react";
import "./CartItem.scss";

class CartItem extends Component {
  render() {
    const images = require.context("../../..", true);

    const { item } = this.props;
    return (
      <li>
        <img src={images(`.${item.imageURL}`)} alt={item.name} />
        {item.name} * {item.count}
      </li>
    );
  }
}

export default CartItem;
