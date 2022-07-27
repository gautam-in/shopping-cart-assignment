import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./miniCart.css";
import { ShopContext } from "../../contexts/shoppingContext";
import CartItems from "./CartItems";
function MiniCart() {
  // console.log("props.show", props.show);
  const { showCart, setShowCart, cartItems, itemCount } =
    useContext(ShopContext);
  const toggleMiniCart = () => {
    setShowCart(!showCart);
  };
  //const [show, setShow] = useState(props.show);
  const navigate = useNavigate();
  const handleStartShopping = (e) => {
    e.preventDefault();
    console.log("strt shopping");
    setShowCart(!showCart);
    navigate("/products");
  };
  // useEffect(() => {
  //   setShow(props.show);
  // }, [props.show, props.onHide]);
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
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {cartItems.length === 0 ? (
          <Button
            id="shopingCartButton"
            onClick={(e) => handleStartShopping(e)}
          >
            Start Shopping
          </Button>
        ) : (
          <>
            Promo code can be applied on payment page
            <Button id="shopingCartButton">Proceed to Checkout</Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default MiniCart;
