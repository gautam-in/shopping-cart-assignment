import React, { useContext } from "react";
import { BootstrapButton as Button } from "../../BootstrapButton";
import CartCard from "../CartCard/CartCard";
import "./CartModal.css";
import { GlobalContext } from "../../../context/GlobalContext";
import { Typography } from "@mui/material";

export default function CartModal() {
  const {
    cartItems: { count, products, cartOpen },
    dispatch,
  } = useContext(GlobalContext);
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  const onClick = () => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen });

  return (
    <section className="section">
      <div className="heading">
        <Typography variant="h6" className="Modaltitle">
          My Cart ({countItems})
        </Typography>
        <Button className="Modalbutton" onClick={onClick}>
          &#10005;
        </Button>
      </div>
      <CartCard className={"flex"} count={count} products={products} />
    </section>
  );
}
