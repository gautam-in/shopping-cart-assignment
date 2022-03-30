import React, { useCallback } from "react";
import Button from "../button/button";
import "./cartDropdown.scss";
import {
  selectCartItemsCount,
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import { toggleCart } from "../../redux/home/home.actions";
import lowprice from "../../assets/lowest-price.png";
import { paths } from "../../routing/constants";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CartDropdown = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleToggle = useCallback(() => dispatch(toggleCart()), [dispatch]);

  return (
    <div className="cart-dropdown">
      <div className="heading-container">
        <h2 className="title">
          My Cart{" "}
          <span>
            {cartItemsCount > 0
              ? `(${cartItemsCount} ${cartItemsCount > 1 ? "items" : "item"})`
              : ""}
          </span>
        </h2>
        <div className="close-icon" onClick={handleToggle}>
          &#10005;
        </div>
      </div>
      {cartItemsCount > 0 ? (
        <>
          <div className="cart-items">
            <div className="item-list">
              {cartItems.map(({ name, imageURL, price, quantity, id }) => (
                <div className="item-container" key={id}>
                  <img src={imageURL} alt={name} className="item-image" />
                  <div className="item-detail">
                    <h3>{name}</h3>
                    <div className="price-container">
                      <div className="btn-list">
                        <span
                          className="minus"
                          onClick={() =>
                            dispatch(
                              removeItem({
                                name,
                                imageURL,
                                price,
                                quantity,
                                id,
                              })
                            )
                          }
                        >
                          -
                        </span>
                        <span>{quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            dispatch(
                              addItem({ name, imageURL, price, quantity, id })
                            )
                          }
                        >
                          +
                        </span>
                        <span>&#10005;</span>
                        <span className="price">{`Rs. ${price}`}</span>
                      </div>
                      <span className="total">{`Rs.${quantity * price}`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cheap-price">
              <img src={lowprice} alt="lowest price" />
              <span> You won't find it cheaper anywhere</span>
            </div>
          </div>
          <div className="checkout-detail">
            <p>Promo code can be applied on payment page.</p>
            <Button onClick={handleToggle}>
              <div className="checkout-total">
                <span>Proceed to Checkout</span>
                <span>
                  {`Rs.${totalPrice}`} <span>&gt;</span>
                </span>
              </div>
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="no-data">
            <div className="title-container">
              <h2>No items in your cart</h2>
              <p>Your favourite items are just a click away</p>
            </div>
          </div>
          <div className="btn-container">
            <Button
              onClick={() => {
                handleToggle();
                history.push(paths.products);
              }}
            >
              Start Shopping
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
