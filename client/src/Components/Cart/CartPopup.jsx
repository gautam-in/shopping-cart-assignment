import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/Cart/cart.action";
import { getTotal, getGrandTotal } from "../../CartUtils/CartUtil";

const CartPopup = () => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.cartItems;
  });
  let { cartItems } = cart;
  let incrementQuantity = (productId) => {
    dispatch(cartActions.incrementQuantity(productId));
  };
  let decrementQuantity = (productId) => {
    dispatch(cartActions.decrementQuantity(productId));
  };
  let deleteProduct = (productId) => {
    dispatch(cartActions.deleteProduct(productId));
  };
  return (
    <React.Fragment>
      <div className="display-cart">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title " id="exampleModalLabel">
                  My Cart({cartItems.length} Items)
                </h5>
                <button
                  type="button"
                  className=" btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {cartItems.length > 0 ? (
                <>
                  <div className="modal-body">
                    <div className="cart-section p-1 mb-3">
                      <div className="row">
                        {cartItems.map((item) => {
                          return (
                            <>
                              <div className="col-3">
                                <img src={item.imageURL} alt={item.name} className="img-fluid" />
                              </div>
                              <div className="col-9">
                                <h6 className="mt-1">{item.name}</h6>
                                <div className="d-flex align-items-center justify-content-between mt-3">
                                  <div className="d-flex align-items-center gap-3">
                                    <i
                                      className="fa-solid fa-circle-minus"
                                      onClick={decrementQuantity.bind(this, item.id)}
                                    ></i>{" "}
                                    {item.quantity}
                                    <i
                                      className="fa-solid fa-circle-plus"
                                      onClick={incrementQuantity.bind(this, item.id)}
                                    ></i>{" "}
                                    <i className="fa-solid fa-xmark"></i> Rs {item.price}
                                  </div>
                                  <div className="d-flex align-items-center gap-3">
                                    <div>Rs. {getTotal(item)}/-</div>
                                    <i
                                      className="fa-solid fa-trash-can"
                                      onClick={deleteProduct.bind(this, item.id)}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="guarantee-section">
                      <div className="row">
                        <div className="col-3">
                          <img
                            src="/static/images/lowest-price.png"
                            alt="Lowest-price"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-9 mt-1">You won't find it cheaper anywhere</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex flex-column justify-content-center">
                    <p>Promo code can be applied on payment page</p>
                    <div className="btn-checkout">
                      <p>Proceed to checkout</p>
                      <p>Rs {getGrandTotal(cartItems)}/-</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                    <h5>No Items in your cart</h5>
                    <p>Your favorite items are just a click away</p>
                  </div>
                  <div className="modal-footer d-flex flex-column justify-content-center">
                    <div className="btn-checkout">
                      <p data-bs-dismiss="modal">Start shopping</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPopup;
