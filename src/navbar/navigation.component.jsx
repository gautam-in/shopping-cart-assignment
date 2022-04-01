import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navigation.styles.scss";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PopupModal from "../component/modal/popup-modal.component";
import Button from "../component/button/button.component";
import CartRow from "../component/cart-row/cart-row.component";
import { addToCart, removeFromCart } from "../redux/action/actions";

const Navigation = ({ cartItems, addItemToCart, removeItemFromCart }) => {
  const [show, setShow] = useState(false);
  const [totalItem, setTotalItem] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const isTablet = useMediaQuery({ maxWidth: 720 });
  const isMobile = useMediaQuery({ maxWidth: 520 });
  const navigate = useNavigate();
  useEffect(() => {
    setTotalItem(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    );
    setTotalAmount(
      cartItems.reduce(
        (previous, current) => previous + current.quantity * current.price,
        0
      )
    );
  }, [cartItems]);

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img
            className="nav-logo-image"
            src={"/static/images/logo.png"}
            alt="sabka bazaar"
          />
        </Link>
        <div className="nav-link-items">
          <div className="nav-link-element">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <div className="nav-link-element">
              <Link to="/login">SignIn</Link>
              <Link to="/register">Register</Link>
            </div>
            <div
              className="cart cursor"
              onClick={() =>
                isMobile || isTablet
                  ? navigate("/cart-items")
                  : window?.location?.pathname !== "/cart-items" &&
                    setShow(!show)
              }
            >
              <img
                className="cart-image"
                src={"/static/images/cart.svg"}
                alt="cart"
              />
              <div className="items-count">{totalItem} items</div>
            </div>
          </div>
        </div>
        <PopupModal
          handleClose={() => setShow(!show)}
          modalHeader={
            <div>My Cart {totalItem ? `(${totalItem} item)` : ""}</div>
          }
          show={show}
          modalFooter={
            <>
              {totalItem ? (
                <div className="text-center w-100 mb-3">
                  Promo code can be applied on payment page
                </div>
              ) : (
                ""
              )}
              <Button
                onClick={() => {
                  if (totalItem) {
                    navigate("/checkout");
                  } else navigate("/products");
                  setShow(false);
                }}
              >
                {totalItem ? (
                  <div className="d-flex justify-content-between mx-3">
                    <div>Proceed to Checkout </div>
                    <div>
                      Rs.{totalAmount} <span className="m-l-2">❯</span>
                    </div>
                  </div>
                ) : (
                  "Start Shopping"
                )}
              </Button>
            </>
          }
        >
          <div
            className={
              totalItem ? "cart-body-item" : "cart-popup-body-container"
            }
          >
            {totalItem ? (
              <div>
                {cartItems.map((item) => (
                  <CartRow
                    item={item}
                    key={`key=${item.id}`}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))}
                <div className="cart-banner">
                  <img
                    src={`/static/images/lowest-price.png`}
                    alt="guaranteed banner"
                  />
                  <div className="ml-5">You won't find it cheaper anywhere</div>
                </div>
              </div>
            ) : (
              <div>
                No items in your cart
                <p>Your favourite items are just a click away</p>
              </div>
            )}
          </div>
        </PopupModal>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state?.cart,
});

const mapDispatchToProps = {
  addItemToCart: (data) => (dispatch) => dispatch(addToCart(data)),
  removeItemFromCart: (data) => (dispatch) => dispatch(removeFromCart(data)),
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
