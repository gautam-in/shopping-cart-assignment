import React, { useEffect } from "react";
import { Categories, Products, Slider } from "../../components";

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
