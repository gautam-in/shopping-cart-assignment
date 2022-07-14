import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./miniCart.css";
function MiniCart(props) {
  //const [show, setShow] = useState(props.show);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="cartHeader">
        <Modal.Title>My Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="emptyCartContent">
          <strong>No items in your cart</strong>
          <br />
          <small>Your favourite items are just a click away</small>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button id="shopingCartButton">Start Shopping</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MiniCart;
