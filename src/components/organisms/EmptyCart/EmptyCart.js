import React, { useContext } from "react";
import "./EmptyCart.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { GlobalContext } from "../../../contexts/GlobalContext";

export default function EmptyCart() {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const navigate = useNavigate();
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const goToProducts = () => {
    if (browserWidth) {
      dispatch({
        type: "HANDLE_CART",
        cartOpen: !cartOpen,
      });
      navigate("/products");
    } else {
      navigate("/products");
    }
  };

  return (
    <section className="empty-cart">
      <div className="empty-cart__sub-container">
        <h2 className="empty-cart__sub-container__title">
          No items in your cart
        </h2>
        <p className="empty-cart__sub-container__text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart__footer">
        <Button
          className={"empty-cart__footer__start-button"}
          onClick={() => goToProducts()}
        >
          Start Shopping
        </Button>
      </footer>
    </section>
  );
}
