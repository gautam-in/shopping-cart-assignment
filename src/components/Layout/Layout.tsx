import React from "react";
import { Outlet } from "react-router-dom";
import type { HeaderProps } from "../../types/customTypes";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({cartSize, popupProps}: HeaderProps) => {
  return (
    <>
      <Header cartSize={cartSize} popupProps={popupProps}/>
        <Outlet />
      <Footer />
    </>
  )
}
