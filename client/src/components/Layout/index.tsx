import { useMarket } from "context";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import classes from "./layout.module.scss";
import { slide as Menu } from "react-burger-menu";
import { Cart } from "pages";

export const Layout: React.FC = () => {
  const { isCartOpen, setIsCartOpen } = useMarket();

  return (
    <>
      <Menu
        aria-hidden={isCartOpen ? false : true}
        isOpen={isCartOpen}
        right
        className={classes.menu}
        onClose={() => setIsCartOpen(false)}
        crossButtonClassName={classes.cross_btn}
      >
        <Cart />
      </Menu>
      <div
        style={{ position: isCartOpen ? "fixed" : "inherit", width: "100%" }}
      >
        <Header />
        <section className={classes.body}>
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  );
};
