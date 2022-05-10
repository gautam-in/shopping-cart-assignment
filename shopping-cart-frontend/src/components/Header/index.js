import { useState } from "react";
import { Modal } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../reducers/userReducer";
import Cart from "../Cart";
import "./Header.scss";

function Header({cart_open}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const activeUser = useSelector((state) => state.userReducer.activeUser);
  const cartCount = useSelector((state) => state.cartReducer.cartCount);
  const navigate = useNavigate();

  const renderLeftDrawer = () => {
    return (
      <Modal
        className="leftDrawer"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div className="leftDrawer">
          <h1 className="close" onClick={() => setOpen(false)}>
            X
          </h1>
          {renderNavItems("Home", "/", "drawerTitle")}
          {renderNavItems("Products", "/products", "drawerTitle")}
          {renderRightNev("drawerTitle")}
        </div>
      </Modal>
    );
  };

  const renderCart = () => {
    return (
      <Modal
        className="modal"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openCart}
        onClose={() => setOpenCart(false)}
      >
        <div>
          <Cart hide={() => setOpenCart(false)} cart_open={openCart}/>
        </div>
      </Modal>
    );
  };

  const renderNavItems = (title, location, class_name = "navTitle") => {
    return (
      <div
        className={class_name}
        onClick={() => {
          if (title === "Logout") {
            dispatch(logout());
          }
          setOpenCart(false);
          setOpen(false);
          navigate(location);
        }}
      >
        {title}
      </div>
    );
  };

  const renderRightNev = (class_name) => {
    return activeUser ? (
      renderNavItems("Logout", "/", class_name)
    ) : (
      <>
        {renderNavItems("SignIn", "/signin", class_name)}
        {renderNavItems("Register", "/register", class_name)}
      </>
    );
  };

  return (
    <header className="topContainer">
      {renderCart()}
      {renderLeftDrawer()}
      <div className="logoContainer">
        <img
          src="static/images/logo.png"
          alt="logo"
          onClick={() => setOpen(true)}
        />
      </div>
      <nav className="navContainer">
        {renderNavItems("Home", "/")}
        {renderNavItems("Products", "/products")}
      </nav>
      <div>
        <span className="rightContainer">{renderRightNev("title")}</span>
        <div
          className="cartContainer"
          onClick={() => {
            if (!openCart && !cart_open) {
              setOpenCart(true);
            }
          }}
        >
          <img src="static/images/cart.svg" alt="cart" />
          <span>{cartCount} Items</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
