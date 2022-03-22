import React, { memo, useEffect } from "react";
import Header from "../header/header";
import "./layout.scss";
import { useSelector } from "react-redux";
import Loader from "../loader/loader";
import { selectIsLoading } from "../../redux/loader/loader.selectors";
import Footer from "../footer/footer";
import { selectCartHidden } from "../../redux/home/home.selectors";
import CartDropdown from "../cartDropdown/cartDropdown";

const Layout = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);
  const isCartVisible = useSelector(selectCartHidden);

  useEffect(() => {
    const body = document.body.classList;
    isCartVisible ? body.add("model-open") : body.remove("model-open");
  }, [isCartVisible]);

  return (
    <div className="layout-container">
      <Header />
      <main className="main-container">
        {isLoading && <Loader />}
        {isCartVisible && (
          <div className="modal-container">
            <div className="cart" />
            <CartDropdown />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout);
