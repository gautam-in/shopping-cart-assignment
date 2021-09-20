import React from "react";
import "./Landing.scss"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductList from "../../components/ProductList/ProductList";

export default function Landing() {
  return (
    <main>
      <HeroCarousel />
      <hr className="divider" />
      <ProductList />
    </main>
  );
}
