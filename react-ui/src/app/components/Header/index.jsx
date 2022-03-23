import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  backdropClasses,
  ButtonBase as Button,
  ButtonGroup,
  Container,
  Drawer,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
// import logo from "../../../../static/images/logo.png";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const { count, cartItems } = useSelector((state) => state.cart);
  const [totalAmount, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0)
    );
  }, [cartItems]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="md">
          <Toolbar>
            <Link to="/">
              <img
                // src={logo}
                src="/images/logo.png"
                srcSet="/images/logo_2x.png 1.5x, /images/logo_2x.png 2x"
                alt="sabka-bazaar-logo"
                loading="lazy"
                width="140"
                height="70"
              />
            </Link>
            <nav className="nav">
              <div className="nav-main-links-container">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
              </div>
              <div className="nav-login-register-container">
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
                <Button onClick={toggleDrawer} className="button-cart">
                  <img
                    src="/images/cart.svg"
                    alt="cart"
                    className="icon-cart"
                  />
                  <span className="cart-count">0 Items</span>
                </Button>
                <Drawer
                  anchor={"right"}
                  open={isDrawerOpen}
                  onClose={toggleDrawer}
                >
                  <div className="cart-header">
                    <p>
                      <span>My Cart </span>({count} items)
                      <span className="para-close-icon" onClick={toggleDrawer}>
                        <CloseIcon />
                      </span>
                    </p>
                  </div>
                  {cartItems.length > 0 && (
                    <table borderless className="cart-item-table">
                      <tbody>
                        {cartItems &&
                          cartItems.map((product) => {
                            return (
                              <tr key={product.id}>
                                <td style={{ width: 100 }}>
                                  <img
                                    src={product.imageURL}
                                    alt={product.name}
                                    className="img-fluid"
                                  />
                                </td>
                                <td style={{ width: "60%" }}>
                                  <strong>{product.name}</strong>
                                  <br />
                                  <ButtonGroup
                                    size="sm"
                                    className="cart-btngrp-btn"
                                  >
                                    <Button
                                      className="cart-buttons"
                                      onClick={() =>
                                        dispatch(removeItem(product))
                                      }
                                    >
                                      <span>&#8722;</span>
                                    </Button>
                                    <Button className="cart-quantity-btn">
                                      <span>{product.quantity}</span>
                                    </Button>
                                    <Button
                                      className="cart-buttons"
                                      onClick={() => dispatch(addItem(product))}
                                    >
                                      <span> &#43;</span>
                                    </Button>
                                  </ButtonGroup>
                                  <span className="price-span">
                                    x Rs. {product.price}
                                  </span>
                                </td>
                                <td style={{ position: "relative" }}>
                                  <span
                                    style={{
                                      position: "absolute",
                                      bottom: "16%",
                                    }}
                                  >
                                    RS {product.price * product.quantity}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  )}

                  {!(cartItems.length > 0) && (
                    <div className="empty-cart-message">
                      <p>
                        <strong>No items in your cart</strong>
                      </p>
                      <p>Your favorite items are just click away</p>
                    </div>
                  )}

                  <div className="checkout-btn-container">
                    <Button
                      color="primary"
                      className="checkout-btn"
                      onClick={toggleDrawer}
                    >
                      {cartItems.length > 0 ? (
                        <>
                          Proceed To Checkout
                          <span>
                            Rs. {totalAmount} <ChevronRightIcon />
                          </span>
                        </>
                      ) : (
                        <>
                          <p className="text-center mb-0">Start Shopping</p>
                        </>
                      )}
                    </Button>
                  </div>
                </Drawer>
              </div>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Header;
