import React, { useContext } from "react";
import "./EmptyCart.css";
import { useNavigate } from "react-router-dom";
import { BootstrapButton as Button } from "../../BootstrapButton";
import { GlobalContext } from "../../../context/GlobalContext";
import { Typography } from "@mui/material";

export default function EmptyCart() {
  //const browserWidth = window.matchMedia("(max-width: 700px)").matches;
  const navigate = useNavigate();
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const goToProducts = () => {
    dispatch({
      type: "HANDLE_CART",
      cartOpen: !cartOpen,
    });
    navigate("/products");
  };

  return (
    <section className="empty-cart">
      <div className="sub-container">
        <Typography variant="h6">No items in your cart</Typography>
        <Typography className="text">
          Your favourite items are just a click away
        </Typography>
      </div>
      <footer className="footer cartFooter">
        <Button className="startbutton" onClick={() => goToProducts()}>
          Start Shopping
        </Button>
      </footer>
    </section>
  );
}
