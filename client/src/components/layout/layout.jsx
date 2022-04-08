import React, { useState, useEffect, Fragment } from "react";

import Header from "../../routes/header/header";
import CartModal from "../cart-modal/cart-modal";
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import "./layout.styles.css";
import { closeCart } from "../../store/actions";
import CartTabletView from "../cart-tablet-view/cart-tablet-view";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Layout = ({ children }) => {
  const showCartModal = useSelector((state) => state.showCart);
  const dispatch = useDispatch();
  const [cartTabletView, setCartTabletView] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth < 768) {
        setCartTabletView(true);
      }
      if (window.innerWidth > 768 && cartTabletView) {
        setCartTabletView(false);
      }
      return;
    }, 1000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (window.innerWidth < 768 && !cartTabletView) {
      setCartTabletView(true);
    }
  }, []);

  return (
    <div className="layout-container">
      <Header />
      {cartTabletView && showCartModal ? (
        <CartTabletView />
      ) : (
        <Fragment>
          <main className="content-container">
            {showCartModal && !cartTabletView && (
              <div className="modal-container">
                <div className="modal" onClick={() => dispatch(closeCart())} />
                <CartModal />
              </div>
            )}
            {children}
          </main>
          <Footer />
        </Fragment>
      )}
    </div>
  );
};

export default Layout;
