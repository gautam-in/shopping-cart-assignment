import React, { useEffect } from "react";
import Categories from "../../components/Categories";
import Carousel from "../../components/Carousel";

function Home() {
  useEffect(() => {
    document.title =
      "Buy Grocies, beauty, products and many more | Sabka Bazaar";
  }, []);

  return (
    <>
      <Carousel />
      <Categories />
    </>
  );
}

export default Home;
