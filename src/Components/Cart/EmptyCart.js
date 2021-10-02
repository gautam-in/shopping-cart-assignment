import React, { useContext } from "react";
import { useMediaQuery} from ".././utility/useMediaQuery"
import { GlobalAppContext } from "../../Context/GlobalAppContext";

export default function EmptyCart() {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalAppContext);

  const goToProducts = () => {
    if (browserWidth) {
      dispatch({
        type: "HANDLE_CART",
        cartOpen: !cartOpen,
      });
    }
  };

  return (
    <section className="empty-cart">
      <div className="empty-cart-sub-container">
        <h2 className="empty-cart-sub-container-title">
          No items in your cart
        </h2>
        <p className="empty-cart-sub-container-text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart-footer">
        <button
          className={"empty-cart-footer-start-button "}
          onClick={() => goToProducts()}
        >
          Start Shopping
        </button>
      </footer>
    </section>
  );
}
