import React, { Component } from "react";
import Card from "./card";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToCartData: [],
      finalCartData: {},
      productCount: 0,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/addToCart").then((res) => {
      this.setState({
        addToCartData: res.data,
      });
      this.props.updateproductCount(res.data.length);
      this.constructData(res.data);
      this.setState({
        productCount: res.data.length,
      });
    });
  }

  constructData = (addToCartData) => {
    const { products } = { ...this.props };
    let finalCartData = {};
    addToCartData.length &&
      products &&
      addToCartData.map((data) => {
        let numOfProd = {};
        let filteredProduct = products.filter(
          (el) => el.id == data.productId
        )[0]; //obj from products

        if (finalCartData.hasOwnProperty(data.productId)) {
          finalCartData[data.productId][data.id] = filteredProduct;
        } else {
          numOfProd[data.id] = filteredProduct;
          finalCartData[data.productId] = numOfProd;
        }
      });
    this.setState({ finalCartData });
  };

  editQty = (action, id) => {
    let finalCartData = { ...this.state.finalCartData };
    if (action == "inc") {
      axios.post("http://localhost:8080/addToCart", { productId: id });
      Object.keys(finalCartData).forEach(
        (el) => el == id && finalCartData[el].push(finalCartData[el][0])
      );
    } else {
      let dbId = Object.keys(finalCartData[id])[0];
      axios.delete(`http://localhost:8080/addToCart/${dbId}`);
      delete finalCartData[id][dbId];
    }
    axios.get("http://localhost:8080/addToCart").then((res) => {
      this.props.updateproductCount(res.data.length);
      {
        this.setState({
          productCount: res.data.length,
        });
      }
    });
    Object.keys(finalCartData[id]).length == 0 && delete finalCartData[id];
    this.setState({
      finalCartData,
    });
  };

  render() {
    const { finalCartData } = { ...this.state };
    return (
      <div className="backdrop pointer">
        <div className="cartBody">
          <header>
            <h2>
              My Cart
              {Object.keys(finalCartData).length > 0 &&
                `(${this.state.productCount} item)`}
            </h2>
            <button className="pointer" onClick={this.props.toggleCart}>
              X
            </button>
          </header>
          <main>
            {Object.keys(finalCartData).length == 0 ? (
              <div className="cartEmpty">
                <h3>No items in your cart</h3>
                <p>Your favorite items are just a click away</p>
              </div>
            ) : (
              <div>
                {Object.keys(finalCartData).length > 0 &&
                  Object.keys(finalCartData).map((el) => (
                    <Card
                      quantity={Object.keys(finalCartData[el]).length}
                      data={Object.values(finalCartData[el])[0]}
                      editQty={this.editQty}
                    />
                  ))}
                <div className="lowestPrice">
                  <img
                    src={`${process.env.PUBLIC_URL}static/images/lowest-price.png`}
                  ></img>
                  <p>You won't find it cheaper anywhere</p>
                </div>
              </div>
            )}
            <section
              className={
                Object.keys(finalCartData).length == 0 && "startShopping"
              }
            >
              {Object.keys(finalCartData).length != 0 && (
                <p>Promo code can be applied on payment page</p>
              )}
              {Object.keys(finalCartData).length != 0 ? (
                <button
                  className="btn btn--full btn--borderRound"
                  onClick={this.props.toggleCart}
                >
                  Proceed to Checkout
                  {}
                  <div>
                    Rs.187
                    <span>{`>`}</span>
                  </div>
                </button>
              ) : (
                <button
                  className="btn btn--full btn--borderRound"
                  onClick={this.props.toggleCart}
                >
                  Start Shopping
                </button>
              )}
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Cart;
