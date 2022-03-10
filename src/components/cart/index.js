import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import { addProductToCart, decreaseQuantity, removeProductFromCart } from "../../actions/cartActions";
import  {useNavigate} from 'react-router-dom';
import "../cart/cart.scss";
import lowestPriceImage from './../../../public/static/images/lowest-price.png';
import closeIcon from './../../../public/static/images/close-icon.svg';

const Cart = (props) => {
  const navigateToProducts = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addToCart = (product) => {
    dispatch(addProductToCart(product));
  }

  const updateQuantity = (product, updatedQuantity) => {
    if(updatedQuantity === 0) {
      dispatch(removeProductFromCart(product.id));
    } else {
      dispatch(decreaseQuantity(product));
    }
  }

  const startShopping = () => {
    props.onHide();
    navigateToProducts("/products");
  }

  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered id="cart-wrapper">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="my-cart-text">
            <span>My cart</span> ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})
            <img id="01" alt="popup-close" title="popup-close" src={closeIcon} className="close-icon" onClick={props.onHide}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
              cartItems && cartItems.length ? <>
                {cartItems.map(productsRecord =>
                    <Row key={productsRecord.key}>
                      <Col md={12} className="cart-items">
                        <Card id={productsRecord.id}>
                          <Card.Body>
                            <Card.Img id={productsRecord.id} alt={productsRecord.name} title={productsRecord.name} variant="top" src={productsRecord.imageURL} />
                            <Card.Title>{productsRecord.name}</Card.Title>
                            <Button data-test="minusButton" variant="primary" className="minus-btn" onClick={() => updateQuantity(productsRecord, productsRecord.quantity - 1)}>-</Button>
                            <span className="quantity">{productsRecord.quantity}</span>
                            <Button data-test="plusButton" variant="primary" className="plus-btn" onClick={() => addToCart(productsRecord)}>+</Button>
                            <span className="multiply-btn">X</span> {productsRecord.price}
                            <span className="price-section">MRP Rs. {productsRecord.total}</span>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                )}
                <div className="lowest-price">
                  <img id="02" alt="lowest-price" title="lowest-price" src={lowestPriceImage} /><span className="lowest-price-text">You won't find it cheaper anywhere</span>
                </div>
              </> : <div className="noitem-wrapper">
                <p className="no-item">No item in your cart</p>
                <p className="click-away">Your favourite items are just aclick away</p>
                </div>
            }
        </Modal.Body>
        <Modal.Footer>
          {
            cartItems && cartItems.length ?
              <>
                <p className="promo-code">Promo code can be applied on payment page</p>
                <Button data-test="checkoutButton" className="checkout-btn default-btn-style" onClick={props.onHide}>
                  <span className="checkout-text">Proceed to Checkout</span>
                  <span className="checkout-amount">Rs. {cartItems.reduce((total, item) => total + item.total, 0)}</span>
                </Button>
              </>:
              <Button data-test="startshoppingButton" variant="primary" className="checkout-btn default-btn-style" onClick={() => startShopping() }>Start Shopping</Button> 
          }
        </Modal.Footer>
      </Modal>
  )
}

export default Cart;