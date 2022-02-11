import React from "react";
import Footer from './Footer/footer.component';
import Header from "./Header/header.component";


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