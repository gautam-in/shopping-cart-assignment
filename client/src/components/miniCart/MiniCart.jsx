import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./miniCart.css";
import { ShopContext } from "../../contexts/shoppingContext";
import CartItems from "./CartItems";
import lowestPriceTag from "../../static/images/lowest-price.png";
function MiniCart() {
  const { showCart, setShowCart, cartItems, itemCount } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const handleStartShopping = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
    navigate("/products");
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Modal
      show={showCart}
      onHide={() => {
        setShowCart(!showCart);
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="cartHeader" closeVariant="white">
        <Modal.Title>
          <span>My Cart </span>
          <span className="item-count">{`(${itemCount} items)`}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p className="emptyCartContent">
            <strong>No items in your cart</strong>
            <br />
            <small>Your favourite items are just a click away</small>
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItems cartItem={item} key={item.id} />
            ))}
            <div className="footer-tag">
              <img
                src={lowestPriceTag}
                alt="lowest-price"
                width="80"
                height="50"
              />
              <h6 className="text-nowrap price-tagline">
                You won't find it cheaper anywhere
              </h6>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {cartItems.length === 0 ? (
          <Button
            className="shopingCartButton"
            onClick={(e) => handleStartShopping(e)}
          >
            Start Shopping
          </Button>
        ) : (
          <div className="w-100">
            <h6 className="text-nowrap price-tagline">
              Promo code can be applied on payment page
            </h6>
            <Button className="shopingCartButton shopingCartFooter">
              <div>Proceed to Checkout</div>
              <div>{`Rs.${totalPrice}`}</div>
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default MiniCart;
