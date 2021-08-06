import React, { useContext, useEffect } from "react";
import OfferBanner from "./OfferBanner";
import ProductBanner from "./ProductBanner";
import { Context as ProductsContext } from "../../context/ProductsContext";
function Home() {
  const { getBanners, getProducts, getCategories, state } =
    useContext(ProductsContext);
  useEffect(() => {
    getBanners();
    getCategories();
    getProducts();
  }, []);
  return (
    <div className="home-container">
      <OfferBanner />
      {state.categories.map((product) => (
        <ProductBanner key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
