import React, { Component } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <>
        {sessionStorage.getItem("currentUser") ? (
          <section className="cart">
            {this.props.mainCartItems.length > 0 ? (
              <article className="cart-filled">
                <h2>My Cart</h2>
                <section>
                  {this.props.mainCartItems.map((_) => {
                    return (
                      <main key={_.id} className="item">
                        <CartItem
                          productId={_.id}
                          productSingle={_}
                          productList={this.state.productList}
                          updateCartItemCount={this.props.updateCartItemCount}
                        />
                      </main>
                    );
                  })}
                  <figure className="advertisement">
                    <img
                      className="addv-image"
                      src="../static/images/lowest-price.png"
                      alt="Lowest price gauranteed"
                    />{" "}
                    you wont find it cheaper anywhere!
                  </figure>
                </section>
              </article>
            ) : (
              <article className="cart-empty">
                <div>
                  <h2>No items in your cart</h2>
                  <p style={{ textAlign: "center" }}>
                    Your favourite items are just a click away
                  </p>
                </div>
              </article>
            )}
            <article className="buttons">
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
            </article>
          </section>
        ) : (
          <section className="doLogin">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                flexDirection: "column",
              }}
            >
              <Link to="/signin">Please Click here to Login</Link>
              <h4>
                <Link
                  to="/signup"
                  style={{
                    color: "red",
                    letterSpacing: "1px",
                  }}
                >
                  If you don't have an account please create!
                </Link>
              </h4>
            </h2>
          </section>
        )}
      </>
    );
  }
}

export default Cart;
