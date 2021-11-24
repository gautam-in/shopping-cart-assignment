import React from "react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="pt-24 text-center text-2xl">Page not found</div>
      <Footer />
    </>
  );
};
