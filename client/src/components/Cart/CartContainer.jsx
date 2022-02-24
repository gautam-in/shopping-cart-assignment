import React, { Fragment } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import "./cart.scss";
import { useContext } from "react";
import { MainContext } from "../../MainContext";
import { useEffect } from "react";

const CartContainer = ({ cartItems, toggleDrawer }) => {
  const {
    setCartItems,
    cartTotal,
    setCartTotal,
    setCartTotalItems,
    cartTotalItems,
  } = useContext(MainContext);

  const quantityIncreaseHandler = (type, item) => {

    if (type === "increase") {
      let cartItem = [...cartItems];
      let product = cartItem.find((product) => product.id === item.id);
      if (product) {
        product.quantity += 1;
        setCartItems(cartItem);
      }
    } else {
      let cartItem = [...cartItems];
      let product = cartItem.find((product) => product.id === item.id);
      if (product) {
        if (product.quantity === 0) {
          const result = cartItem.filter((product) => product.quantity !== 0);
          setCartItems(result);
        } else {
          product.quantity -= 1;
          setCartItems(cartItem);
        }
      }
    }
  };

  const closeCartHandler = () => {
    toggleDrawer("right", false);
  };

  useEffect(() => {
    let total = 0;
    total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setCartTotal(total);
    if (cartItems.some((item) => item.quantity === 0)) {
      setCartItems(cartItems.filter((item) => item.quantity !== 0));
      setCartTotalItems(cartItems.filter((item) => item.quantity !== 0).length);
    }
  }, [cartItems]);

  return (
    <Fragment>
      <div className="cart-header">
        <p>
          My Cart {cartTotalItems > 0 && <span>({cartTotalItems} items )</span>}
          <span className="para-close-icon" onClick={closeCartHandler}>
            <CloseIcon />
          </span>
        </p>
      </div>
      {cartItems.length > 0 ? (
        <Fragment>
          <Table borderless className="cart-item-table">
            <tbody>
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ width: 100 }}>
                        <img
                          src={item.imageURL}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </td>
                      <td style={{ width: "60%" }}>
                        <strong>{item.name}</strong>
                        <br />
                        <ButtonGroup
                          // style={{height : 25}}
                          size="sm"
                          className="cart-btngrp-btn"
                        >
                          <Button
                            className="cart-buttons"
                            onClick={() =>
                              quantityIncreaseHandler("decrease", item)
                            }
                          >
                            <span>&#8722;</span>
                          </Button>
                          <Button className="cart-quantity-btn">
                            <span>{item.quantity}</span>
                          </Button>
                          <Button
                            className="cart-buttons"
                            onClick={() =>
                              quantityIncreaseHandler("increase", item)
                            }
                          >
                            <span> &#43;</span>
                          </Button>
                        </ButtonGroup>
                        <span className="price-span"> x Rs. {item.price} </span>
                      </td>
                      <td style={{ position: "relative" }}>
                        <span style={{ position: "absolute", bottom: "16%" }}>
                          RS {item.price * item.quantity}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <div className="cart-advertisement">
            <img
              src="/static/images/lowest-price.png"
              className="img-fluid"
              alt="advertisement"
            />
            <span>You won't find it cheaper anywwhere</span>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="cart-empty-msg">
            <div className="vertical-center">
              <p>
                <strong>No items in your cart</strong> <br />
                Your favourite items are just click away
              </p>
            </div>
          </div>
        </Fragment>
      )}

      <div className="checkout-btn-container">
        <Button
          color="primary"
          className="checkout-btn"
          onClick={closeCartHandler}
        >
          {cartItems.length > 0 ? (
            <Fragment>
              Proceed To Checkout
              <span>
                Rs. {cartTotal} <ChevronRightIcon />
              </span>
            </Fragment>
          ) : (
            <Fragment>
              <p className="text-center mb-0">Start Shopping</p>
            </Fragment>
          )}
        </Button>
      </div>
    </Fragment>
  );
};

export default CartContainer;
