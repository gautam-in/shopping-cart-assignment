import React, { useState } from "react";
import Cart from "../../Pages/Cart/Cart.component";

import Footer from "../Footer/Footer.component";
import Header from "../Header/Header.component";
import "./Layout.css";

export default function Layout(props) {
  const [showCartModal, toggleCartModal] = useState(false);
  const showHideCartModal = () => {
    toggleCartModal(!showCartModal);
  };
  return (
    <div className="layout">
      <header>
        <div className="container">
          <Header showHideCartModal={() => showHideCartModal()} />
        </div>
      </header>
      {showCartModal && (
        <div className="cart-container" role="dialog" tabIndex="-1">
          <div className="container">
            <Cart showHideCartModal={() => showHideCartModal()} />
          </div>
        </div>
      )}
      <article>
        <div className="container">{props.children}</div>
      </article>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
