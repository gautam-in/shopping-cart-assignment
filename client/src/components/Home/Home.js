import React, { useState, useEffect } from "react";
import Banners from "../Banner/Banners";
import Category from "../Category/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <Banners />
      {categories.map(
        (category) =>
          category.enabled && <Category key={category.id} category={category} />
      )}
    </div>
  );
};

export default Home;
