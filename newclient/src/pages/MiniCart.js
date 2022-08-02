import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./MiniCart.css";
import { GrFormClose } from "react-icons/gr";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import lowestPrice from "./lowest-price.png";
const MiniCart = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cardmodalstate.show);
  const handleClose = () => {
    dispatch({ type: "CARD_MODAL_STATE", payload: false });
  };
  const handleShow = () => {
    dispatch({ type: "CARD_MODAL_STATE", payload: true });
  };

  const cart = useSelector((state) => state.cartadddeleteitem.cart);

  const cartTotalQuantity = useSelector(
    (state) => state.cartadddeleteitem.cartTotalQuantity
  );

  return (
    <>
      <Modal show={show} onHide={handleClose} className="minicart">
        <Modal.Header className="cart-header" closeButton>
          <Modal.Title>
            My Cart{" "}
            <span className="totalCartItem">({cartTotalQuantity} item)</span>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
          {cart?.length ? (
            <>
              {cart.map((prod) => (
                <>
                  <span className="cartItem" key={prod.id}>
                    <img
                      src={prod.imageURL}
                      alt={prod.name}
                      className="cartItemImg"
                    />
                    <div className="cartDetail">
                      <span className="cartProductName">{prod.name}</span>
                      <div className="cartItemDetail">
                        <AiFillMinusCircle
                          onClick={() =>
                            dispatch({ type: "DELETE_ITEMS", payload: prod })
                          }
                          className="cartMinusButton"
                        />
                        <span>{prod.qty}</span>
                        <AiFillPlusCircle
                          onClick={() =>
                            dispatch({ type: "ADD_ITEMS", payload: prod })
                          }
                          className="cartPlusButton"
                        />
                        <GrFormClose className="cartMulButton" />
                        <span className="cartProductPrice">
                          Rs. {prod.price}
                        </span>
                      </div>
                    </div>
                    <div className="cartTotalPrice">
                      Rs. {prod.qty * prod.price}
                    </div>
                  </span>
                </>
              ))}
              <div className="lowestPriceConatiner">
                <img src={lowestPrice} alt="lowestPrice" />
                <p className="cheaperContainerText">
                  You won't find it cheaper anywhere
                </p>
              </div>
            </>
          ) : (
            <>
              <h2>Nothing in your cart</h2>
              <div>your favourite items are just click away!</div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="cartFooter">
          <div>
            <p className="promoCodeText">
              Promo code can be applied on payment page
            </p>
          </div>
          <div class="CartTotalItemDetail" onClick={handleClose}>
            <p>Proceed to Checkout </p>
            <span>
              {cart.reduce((total, item) => total + item.price * item.qty, 0)}
            </span>
            <GrFormNext className="cartForwardIcon" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MiniCart;
