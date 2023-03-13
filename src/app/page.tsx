"use client";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Products from "./components/product/Products";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  console.log("Home Component Loded ...");
  return (
    <>
      <Header />
      <section className="">
        <Navbar />
        <Products />
      </section>
      <Footer />
    </>
  );
}
