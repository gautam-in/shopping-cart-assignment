import React, { Component } from "react";
import "./ItemActions.scss";
import { CartContext } from "../../../../services/cartContext";
import cartServices from "../../../../services/cartServices";

class ItemActions extends Component {
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
    const { item } = this.props;

    return (
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
    );
  }
}

export default ItemActions;
