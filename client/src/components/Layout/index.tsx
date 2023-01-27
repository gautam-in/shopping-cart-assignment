import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import style from "./layout.module.scss";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <section className={style.body}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
