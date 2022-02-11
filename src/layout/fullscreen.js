import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
