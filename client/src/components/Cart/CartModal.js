import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const CartModal = ({ cartItems, show, handleClose, totalCartPrice }) => {
  const [itemCount, setItemCount] = useState(1);

  const decrementCount = () => {
    if (itemCount === 0) {
      setItemCount(itemCount);
    } else {
      setItemCount((itemCount) => itemCount - 1);
    }
  };

  const incrementCount = (id) => {
    const cartItem = cartItems.find((item) => item.id === id);
    if (itemCount === cartItem.stock) {
      setItemCount(itemCount);
    } else {
      setItemCount((itemCount) => itemCount + 1);
    }
  };

  return cartItems?.length === 0 ? (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header
        className="bg-dark text-light"
        closeButton
        closeVariant="white"
      >
        <Modal.Title>My Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "600px" }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <h3>No items in your cart</h3>
        <p>Your favourite items are just a click away</p>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        <Button variant="danger" className="w-100" onClick={handleClose}>
          Start Shopping
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header
        className="bg-dark text-light"
        closeButton
        closeVariant="white"
      >
        <Modal.Title>
          My Cart{" "}
          {cartItems.length > 1
            ? `(${cartItems.length} items)`
            : `(${cartItems.length} item)`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "600px" }}
        className="d-flex flex-column align-items-center overflow-auto"
      >
        {cartItems?.map((item) => (
          <Row
            style={{
              border: "2px solid #eee",
              boxShadow: "5px 5px 10px #eee",
            }}
            key={item.id}
            className="w-100 p-3 mb-1"
          >
            <Col xs={2}>
              <img src={item.imageURL} alt={item.name} width={50} />
            </Col>
            <Col xs={10}>
              <h6>{item.name}</h6>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => decrementCount()}
                  >
                    -
                  </Button>{" "}
                  {itemCount}{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => incrementCount(item.id)}
                  >
                    +
                  </Button>{" "}
                  X Rs. {item.price}
                </div>
                <span>Rs.{item.price * itemCount}</span>
              </div>
            </Col>
          </Row>
        ))}
        <div className="w-100 text-center p-3">
          <img
            src="static/images/lowest-price.png"
            alt="You won't find it cheaper anywhere"
            width={100}
          />{" "}
          You won't find it cheaper anywhere
        </div>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        <Button
          variant="danger"
          className="w-100 d-flex justify-content-between"
          onClick={handleClose}
        >
          Proceed to Checkout <span>Rs.{totalCartPrice * itemCount}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
