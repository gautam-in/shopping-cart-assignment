import React, { useState, useEffect } from "react";
import Category from "../Category/Category.component";
import { CategoriesContainer } from "./Categories.styles.js";
import api from "../../api/data";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await api.get("/categories");
      let data = await response.data;
      setCategories(data);
    }
    getData();
  }, []);
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
};

export default Categories;
