import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "../styles/Cart.scss";

export default function Cart() {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  // console.log("cart data: ", cart);
  const listOfProducts = cart.cartItems;
  const handleClick = () => {
    navigate("/");
  };

  const handlePlusBtnClick = (product) => {
    cart.addItem(product);
    setTotalCartValue(totalCartValue + product.count * product.price);
  };

  const handleMinusBtnClick = (product) => {
    // third;
    cart.reduceItem(product);
    setTotalCartValue(totalCartValue - product.count * product.price);
  };

  const renderItemsList = () => {
    console.log(cart);
    return (
      <div>
        {Object.keys(listOfProducts).map((key) => {
          const product = listOfProducts[key];
          return (
            <div className="flex-apart" key={key}>
              <div style={{ display: "flex" }}>
                <img className="item-img" src={product.imageURL} alt={product.id}></img>
                <div>
                  <div>{product.name}</div>
                  <div>
                    <button
                      className="count-btn"
                      onClick={() => handlePlusBtnClick(product)}
                    >
                      +
                    </button>
                    <span> {product.count} </span>
                    <button
                      className="count-btn"
                      onClick={() => handleMinusBtnClick(product)}
                    >
                      -
                    </button>
                    <span> X Rs.{product.price}</span>
                  </div>
                </div>
              </div>
              <div>Rs.{product.count * product.price}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {cart.itemCount > 0 ? (
        // <Container style={{ backgroundColor: "lightsteelblue", width: "82vw" }}>
        <Container className="cart-container">
          <Row style={{ padding: "20px 0" }}>
            <Col>
              <header className="wide bg-dark">
                <b>My Cart</b>{" "}
                <span className="font-sm">{`(${cart.itemCount} item)`}</span>
              </header>
            </Col>
          </Row>
          <Row>
            <Col>
              <main className="main-container">
                <section className="wide">
                  {renderItemsList()}
                </section>
                <section className="wide flex-container">
                  <div>
                    <img src="\static\images\lowest-price.png" alt="Lowest price guarenteed"></img>You won't
                    find cheaper anywhere
                  </div>
                </section>
              </main>
            </Col>
          </Row>
          <Row style={{ padding: "20px 0" }}>
            <Col>
              <section className="wide flex-container">
                <div>Promo code can be applied on payment page</div>
              </section>
              <section className="wide">
                <button
                  className="cart-btn flex-container"
                  style={{ justifyContent: "space-between" }}
                  onClick={handleClick}
                >
                  <div>Proceed to checkout</div>
                  <div>{`Rs.${cart.cartValue}   >`}</div>
                </button>
              </section>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <Container className="cart-container">
            <Row style={{ padding: "20px 0" }}>
              <Col>
                <header className="wide bg-dark">
                  <b>My Cart</b>
                </header>
              </Col>
            </Row>
            <Row style={{ padding: "20px 0" }}>
              <Col>
                <main className="empty-cart">
                  <div>
                    <b>No item in your cart </b>
                  </div>
                  <div>Your favourite items are just a click away</div>
                </main>
              </Col>
            </Row>
            <Row style={{ padding: "20px 0" }}>
              <Col>
                <section className="wide">
                  <button
                    className="cart-btn flex-container"
                    onClick={handleClick}
                  >
                    <div>Start Shopping</div>
                  </button>
                </section>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
