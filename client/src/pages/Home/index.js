import React, { useEffect } from "react";
import Categories from "../../components/Categories";

function Home() {
  useEffect(() => {
    document.title =
      "Buy Grocies, beauty, products and many more | Sabka Bazaar";
  }, []);

  return (
    <>
      <Categories />
    </>
  );
}

export default Home;
