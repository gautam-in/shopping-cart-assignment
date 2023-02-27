import React, { lazy, useEffect } from "react";

const Categories = lazy(() => import("../../components/categories/Categories"));
const Products = lazy(() => import("../../components/products/Products"));
const Slider = lazy(() => import("../../components/slider/Slider"));
const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        const element = document.getElementById("products");
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY;
          window.scroll({
            top: y,
            behavior: "smooth",
          });
        }
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <div className="container">
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
