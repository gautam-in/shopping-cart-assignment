import React, { Component } from "react";
import { isEmpty } from "lodash";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: "",
    };
  }

  componentDidMount = () => {
    if (!isEmpty(this.props.productList) && this.props.productId) {
      let data = this.props.productList.find(
        (obj) => obj.id === this.props.productId
      );
      this.setState({
        productDetails: data,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productList !== prevProps.productList) {
      let data = this.props.productList.find(
        (obj) => obj.id === this.props.productId
      );
      this.setState({
        productDetails: data,
      });
    }
  }

  decreaseCount = () => {
    console.log("decrese");
    this.props.updateCartItemCount("decrease", this.state.productDetails.id);
  };

  increaseCount = () => {
    console.log("increase count");
    this.props.updateCartItemCount("increase", this.state.productDetails.id);
  };

  render() {
    return (
      <div
        className="cart-item"
        style={{ maxWidth: "80%", margin: "0rem auto" }}
      >
        <div className="item-image">
          <img
            src={this.state.productDetails.imageURL}
            height={80}
            alt={this.state.productDetails.name}
          />
        </div>
        <div className="purchase-description">
          <div className="item-name">{this.state.productDetails.name}</div>
          <div className="item-quantity">
            <button
              type="button"
              aria-label="decrease quantity by one"
              className="quant-buttons left"
              onClick={this.decreaseCount}
            >
              -
            </button>
            <span>{this.props.productSingle.quantity}</span>
            <button
              type="button"
              aria-label="increase quantity by one"
              className="quant-buttons right"
              onClick={this.increaseCount}
            >
              +
            </button>{" "}
            <span aria-label="multiplied-by">x</span>
            &nbsp;Rs.{this.props.productSingle.unitPrice}
          </div>
        </div>
        <div className="item-price">
          Rs.
          {this.props.productSingle.unitPrice *
            this.props.productSingle.quantity}
        </div>
      </div>
    );
  }
}

export default CartItem;
