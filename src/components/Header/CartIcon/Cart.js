import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import cartImage from "../../../static/images/cart.svg";
import Modal from "@mui/material/Modal";
import "./cart.css";
import { Typography } from "@mui/material";
import CartModal from "../../CartPage/Modal/CartModal";

function Cart() {
  const {
    cartItems: { count, cartOpen },
    dispatch,
  } = useContext(GlobalContext);
  const countItem =
    count > 0 ? (count === 1 ? `${count} item` : `${count} items`) : `0 item`;

  const navigate = useNavigate();
  const windowWidth = window.matchMedia("(max-width: 700px)");

  const handleCartClick = () => {
    !windowWidth.matches
      ? dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
      : navigate("/cartpage");
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && handleCartClick();
  };

  return (
    <>
      {
        <div
          className="cart-wrapper"
          onClick={() => {
            handleCartClick();
          }}
          tabIndex={0}
          onKeyPress={handleKeyPress}
        >
          <img
            src={cartImage}
            alt={"cart"}
            loading="lazy"
            className="cartimage"
          />
          <Typography className="Itemtext">{countItem}</Typography>
        </div>
      }
      {cartOpen && !windowWidth.matches ? (
        <Modal
          open={cartOpen}
          onClose={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
          aria-labelledby="Cart Modal"
          aria-describedby="Check your cart here"
        >
          <CartModal cartOpen={cartOpen} />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
