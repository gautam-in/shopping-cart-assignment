import React from "react";

import Header from "../../routes/header/header";
import CartModal from "../cart-modal/cart-modal";
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import "./layout.styles.css";
import { closeCart } from "../../store/actions";

const Layout = ({ children }) => {
  const showCartModal = useSelector((state) => state.showCart);
  const dispatch = useDispatch();
  return (
    <div className="layout-container">
      <Header />
      <main className="content-container">
        {showCartModal && (
          <div className="modal-container">
            <div className="modal" onClick={() => dispatch(closeCart())} />
            <CartModal />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
