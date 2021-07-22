import React, { Component } from "react";
import CartItem from "./CartItem";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    this.productListData();
  }

  productListData = () => {
    axios.get(`http://localhost:5000/products`).then((res) => {
      if (res && res.status === 200) {
        const response = res.data;
        this.setState({ productList: response });
      } else {
        this.setState({
          productList: [],
        });
      }
    });
  };

  handleButtonClick = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="cart">
        {this.props.mainCartItems.length > 0 ? (
          <div className="cart-filled">
            <h2>My Cart</h2>
            <section>
              {this.props.mainCartItems.map((_) => {
                return (
                  <div key={_.id} className="item">
                    <CartItem
                      productId={_.id}
                      productSingle={_}
                      productList={this.state.productList}
                      updateCartItemCount={this.props.updateCartItemCount}
                    />
                  </div>
                );
              })}
              <div className="advertisement">
                <img
                  className="addv-image"
                  src="../static/images/lowest-price.png"
                  alt="Lowest price gauranteed"
                />{" "}
                you wont find it cheaper anywhere!
              </div>
            </section>
          </div>
        ) : (
          <div className="cart-empty">
            <div>
              <h2>No items in your cart</h2>
              <p style={{ textAlign: "center" }}>
                Your favourite items are just a click away
              </p>
            </div>
          </div>
        )}
        <div className="buttons">
          <button
            type="button"
            onClick={this.handleButtonClick}
            onKeyPress={this.handleButtonClick}
            tabIndex={0}
            style={{ zIndex: 100 }}
          >
            {this.props.mainCartItems.length > 0
              ? `Proceed to checkout`
              : "Start Shopping"}
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
