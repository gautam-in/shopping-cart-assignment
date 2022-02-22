import React, { Fragment } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./cart.scss";
import { useContext } from "react";
import { MainContext } from "../../MainContext";
import { useEffect } from "react";

const CartContainer = ({ cartItems, toggleDrawer }) => {
  const { setCartItems, cartTotal, setCartTotal, setCartTotalItems } =
    useContext(MainContext);
  console.log("cartcontainerprops", cartItems);

  const quantityIncreaseHandler = (type, item) => {
    console.log(type, item);

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
      console.log("prodcutdecrease", product);
      if (product) {
        if (product.quantity === 0) {
          const result = cartItem.filter((product) => product.quantity !== 0);
          console.log("result", result);
          setCartItems(result);
        } else {
          product.quantity -= 1;
          setCartItems(cartItem);
        }
      }
    }
  };

  const closeCartHandler = () => {
      console.log(toggleDrawer('right',false))
    // toggleDrawer("right", false);
  };

  useEffect(() => {
    console.log("cartItems", cartItems);
    let total = 0;
    total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setCartTotal(total);
    if (cartItems.some((item) => item.quantity == 0)) {
      setCartItems(cartItems.filter((item) => item.quantity !== 0));
      setCartTotalItems(cartItems.filter((item) => item.quantity !== 0).length);
    }
  }, [cartItems]);

  return (
    <Fragment>
      {cartItems.length > 0 ? (
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
      ) : (
        <Fragment>
          <div className="cart-empty-msg">
            <div class="vertical-center">
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
