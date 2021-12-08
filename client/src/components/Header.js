import React, { useEffect, useState } from "react";
import "../css/Header.css";
import Logo from "../static/images/logo.png";
import { useNavigate } from "react-router-dom";
import CartSvg from "../static/images/cart.svg";
import Cart from "./Cart";
import { getCartItems, getCartItemsCount } from "../utils/cart";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton } from "@mui/material";

function Header({
  itemCount,
  cartItems,
  setCartItems,
  increaseCountHandler,
  decreaseCountHandler,
  setItemCount,
}) {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [userDataState, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const signOutHandler = () => {
    localStorage.removeItem("userData");
    setItemCount(getCartItemsCount());
    setUserData(null);
    navigate("/");
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserData(true);
    } else {
      setUserData(false);
    }
  }, [localStorage.getItem("userData")]);

  const cartOpener = () => {
    setCartItems(getCartItems());
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };
  console.log("cartItems", cartItems);
  return (
    <header>
      {cartOpen ? (
        <Cart
          setCartOpen={setCartOpen}
          cartItems={cartItems}
          itemCount={itemCount}
          increaseCountHandler={increaseCountHandler}
          decreaseCountHandler={decreaseCountHandler}
        />
      ) : null}

      <img
        src={Logo}
        alt="Not found"
        onClick={() => {
          setMenuOpen(false);
          navigate("/");
        }}
      />
      <div className="menu_icon">
        <IconButton color="info" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={`header_links ${menuOpen ? "menu_oepn" : ""}`}>
        <div className="header_links_left">
          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/");
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/products/all");
            }}
          >
            Products
          </p>
        </div>

        <div className="header_links_right">
          <div className="login_container">
            {!userDataState ? (
              <React.Fragment>
                <p
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/signin");
                  }}
                >
                  SiginIn
                </p>
                <p
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/register");
                  }}
                >
                  Register
                </p>
              </React.Fragment>
            ) : (
              <p
                onClick={() => {
                  setMenuOpen(false);
                  signOutHandler();
                }}
              >
                Signout
              </p>
            )}
          </div>
          <div
            className="cart_menu"
            onClick={() => {
              setMenuOpen(false);
              cartOpener();
            }}
          >
            <img src={CartSvg} />
            <span>{itemCount} Items</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
