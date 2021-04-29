import React, { useEffect, useRef, useState } from "react";
import logo from "@images/logo.png";
import cart from "@images/cart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Mycart from "../Mycart/Mycart";
import { useStore } from "@src/customHooks/useContext";

const Header: any = () => {
  const [state, dispatch] = useStore();
  const dialogRef: any = useRef();

  useEffect(() => {
    let clicker = dialogRef.current.addEventListener(
      "click",
      function (event: any) {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }
    );

    return () => {
      dialogRef.current.removeEventListener(clicker);
    };
  }, []);

  const handleClick = (e: any) => {
    e.stopPropagation();
    dialogRef.current.showModal();
  };

  const handleClose = (e: any) => {
    dialogRef.current.close();
  };

  return (
    <header className={`${styles.header}`}>
      <section
        className={`disp-flex pos-rel align-items-center high-100-perc ${styles.header_main_contents}`}
      >
        <img src={logo} alt="app_logo" height="60" width="150" />
        <nav className={styles.main_nav_container}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <nav className={`pos-abs right-0 top-0 ${styles.sub_nav_container}`}>
          {state.logedInUserDetails ? (
            <>
              <span>{state.logedInUserDetails?.Email}</span>
              <Link
                to="/login"
                onClick={() =>
                  dispatch({
                    type: "SET_LOGIN_DETAILS",
                    payload: null,
                  })
                }
              >
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">SignIn</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>

        <aside
          className={`disp-flex pos-abs right-0 align-items-center ${styles.cart_container}`}
          onClick={handleClick}
        >
          <img src={cart} alt="cart_icon" height="25" width="25" />
          <span>{state.myCartItems.length} items</span>
        </aside>
      </section>

      <dialog className={styles.dialogContainer} ref={dialogRef}>
        <Mycart handleClose={handleClose} />
      </dialog>
    </header>
  );
};

export default Header;
