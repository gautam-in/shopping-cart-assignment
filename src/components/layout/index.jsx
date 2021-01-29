import React from "react";
import Footer from "./Footer";
import Header from "./Header";
function index({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default index;
