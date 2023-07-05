import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import Carousel from "../../components/Carousel";
import { fetchCategories } from "../../api/products";
import { fetchBanners } from "../../api/banners";

function Home() {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    document.title =
      "Buy Grocies, beauty, products and many more | Sabka Bazaar";
    fetchBanners().then((banners = []) => setBanners(banners));

    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <>
      <Carousel banners={banners} />
      <Categories categories={categories} />
    </>
  );
}

export default Home;
