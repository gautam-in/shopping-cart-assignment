import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import style from "./layout.module.scss";

interface ILyaoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILyaoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <section className={style.body}>{children}</section>
      <Footer />
    </>
  );
};
