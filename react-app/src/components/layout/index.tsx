import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <MainContent>{children}</MainContent>
    <Footer />
  </>
);

export default Layout;
