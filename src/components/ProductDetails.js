import React, { Component } from "react";
import { toast } from "react-toastify";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };
  }

  addItemToCard = (totalData, newItem) => {
    // let total = [...totalData, newItem];
    // this.setState({
    //   cartItems: total,
    // });
    this.setState(
      {
        cartItems: [...this.state.cartItems, newItem],
      },
      () => {
        console.log(this.state.cartItems);
      }
    );
    let checkItem = this.props.mainCartItems.find(
      (obj) => obj.id === newItem.id
    );
    if (typeof checkItem === "object") {
      // this.props.allSelectedProducts(newItem, "sameItem");
      // toast.success("Item Already Exist in Cart, Increased Count");
      this.increaseQuantity(newItem.id, checkItem);
    } else {
      this.props.allSelectedProducts(newItem, "");
      toast.success("Successfully Added to the Cart!");
    }
    console.log("Add new one");
  };

  increaseQuantity = (prodId, check) => {
    // debugger;
    let cartItems =
      typeof check === "object"
        ? [...this.state.cartItems, check]
        : [...this.state.cartItems];
    let currentItem = cartItems.find((obj) => obj.id === prodId);
    currentItem.quantity = currentItem.quantity + 1;
    currentItem.totalPrice = currentItem.totalPrice + currentItem.unitPrice;
    currentItem.stock = currentItem.stock - 1;

    // let newList = cartItems.filter((obj) => obj.id !== currentItem.id);
    // newList.push(currentItem);
    // this.setState({
    //   cartItems: newList,
    // });
    this.props.allSelectedProducts(currentItem, "sameItem");
    toast.success("Item Already Exist in Cart, Increased Count");
    console.log("Add existing");
  };

  handleBuyNow = (prodId) => {
    if (this.props.checkingUserAuth()) {
      if (this.state.cartItems.find((_) => _.id === prodId)) {
        this.increaseQuantity(prodId);
      } else {
        let data = {
          id: prodId,
          quantity: 1,
          stock: this.props.product.stock,
          unitPrice: this.props.product.price,
          totalPrice: this.props.product.price,
        };
        this.addItemToCard(this.state.cartItems, data);
      }
    }
  };

  render() {
    return (
      <section className="product-card">
        <article className="product-title">{this.props.product.name}</article>
        <article className="product-details">
          <img
            className="product-image"
            src={this.props.product.imageURL}
            alt={this.props.product.name}
            height="120"
            width="100"
          />
          <div className="product-description">
            {this.props.product.description}
          </div>
        </article>
        <article className="price-details">
          <div className="mrp">MRP Rs {this.props.product.price}</div>
          <button
            type="button"
            className="buy-button"
            onClick={() => this.handleBuyNow(this.props.product.id)}
            tabIndex={0}
            onKeyPress={() => this.handleBuyNow(this.props.product.id)}
          >
            Buy Now{" "}
            <span className="buy-now-price">
              {" "}
              @ Rs.{this.props.product.price}
            </span>
          </button>
        </article>
      </section>
    );
  }
}
export default ProductDetails;
