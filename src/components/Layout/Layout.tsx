import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";
import type { HeaderProps } from "../../types/customTypes";

export const Layout = ({cartSize, popupProps}: HeaderProps) => {
  return (
    <>
      <Header cartSize={cartSize} popupProps={popupProps}/>
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
