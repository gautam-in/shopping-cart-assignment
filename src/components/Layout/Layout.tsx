import React from "react";
import { Outlet } from "react-router-dom";
import type { CartSize } from "../../types/customTypes";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ size }: CartSize) => {
  return (
    <>
      <Header size={size}/>
        <Outlet />
      <Footer />
    </>
  )
}
