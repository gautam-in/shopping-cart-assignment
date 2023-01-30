import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import AddToCart from "../AddToCartModal";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>
        {children}
        <AddToCart />
      </MainContent>
      <Footer />
    </>
  );
};
export default Layout;
