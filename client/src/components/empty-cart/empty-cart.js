import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { closeCart } from "../../store/actions";
import "./empty-cart.styles.css";

const EmptyCart = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="empty-cart">
        <h3>No items in your cart</h3>
        <p>Your favourite items are just a click away</p>
      </div>
      <div className="empty-cart-footer">
        <Link style={{ width: "100%" }} to="/products">
          <Button
            className="start-shopping-btn"
            onClick={() => dispatch(closeCart())}
            aria-label="Start Shopping"
          >
            Start Shopping
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default EmptyCart;
