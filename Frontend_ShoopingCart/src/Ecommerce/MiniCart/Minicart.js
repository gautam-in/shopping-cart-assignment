import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './minicart.css';
import lowestPrice from '../static/images/lowest-price.png';

export default function Minicart(props) {
  const { handleClose, show, cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (a, c) => a + c.qty * c.price,
    0
  );
  console.log(props, 'props');
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className="modal_header">
          <Modal.Title>My Cart items {cartItems.length}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <div>
            {cartItems.length === 0 && (
              <div className="empty_cart">
                <p>No items in your cart</p>
                <h5>your favorite items just few clicks away</h5>
              </div>
            )}
            {cartItems.map((item) => (
              <div>
                <div key={item.id} className="row card_design1">
                  <div className="col-4 col-md-3">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="d-block   categories_image"
                    />
                  </div>{' '}
                  <div className="col-8  col-md-8">
                    <p>{item.name}</p>
                    <button
                      type="button"
                      class="btn btn-danger btn-circle btn-lg"
                      onClick={() => onRemove(item)}
                    >
                      <i>-</i>
                    </button>
                    &nbsp;&nbsp; <span>{item.qty}</span> &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-danger btn-circle btn-lg"
                      onClick={() => onAdd(item)}
                    >
                      <i>+</i>
                    </button>{' '}
                    &nbsp;&nbsp; x &nbsp;&nbsp; &nbsp;&nbsp; $
                    {item.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <div className="row  ">
                <div className="col-12 lowest_price_card">
                  <img
                    src={lowestPrice}
                    alt={'lowestPrice'}
                    className="d-block   .lowest_price"
                  />
                  &nbsp;&nbsp;
                  <span>you won't find cheaper anywhere</span>
                </div>{' '}
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>Promo code can be applied on payment page</p>
          <Button variant="danger" onClick={handleClose}>
            Proceed to Checkout &nbsp;&nbsp;&nbsp;&nbsp;$
            {itemsPrice.toFixed(2)}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
