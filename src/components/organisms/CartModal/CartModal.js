import React, { useContext } from "react";
import Button from "../../atoms/Button/Button";
import CardTablet from "../CartTablet/CardTablet";
import "./CartModal.scss";
import { GlobalContext } from "../../../contexts/GlobalContext";

export default function CartModal({ cartOpen }) {
  const {
    cartItems: { count, products },
    dispatch,
  } = useContext(GlobalContext);
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className="cartmodal__section">
      <div className="cartmodal__section__heading">
        <h1 className="cartmodal__section__heading__title">
          My Cart ({countItems})
        </h1>
        <Button
          className={"cartmodal__section__heading__button"}
          onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
        >
          &#10005;
        </Button>
      </div>
      <CardTablet
        className={"cartmodal__section__flex"}
        count={count}
        products={products}
      />
    </section>
  );
}
