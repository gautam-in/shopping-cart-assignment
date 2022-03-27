import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Categories.module.css";
import Category from "../Category";
const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  const loadCategoriesData = async () => {
    const { data } = await axios.get("http://localhost:5000/categories");
    const category = data
      .sort((a, b) => a.order - b.order)
      .filter((category) => category.order > 0);
    setCategoriesData(category);
  };

  useEffect(() => {
    loadCategoriesData();
  }, []);

  return (
    <section className={classes["categories-container"]}>
      {categoriesData.map((categoryData) => {
        return <Category key={categoryData.id} categoryData={categoryData} />;
      })}
    </section>
  );
};

export default Categories;
