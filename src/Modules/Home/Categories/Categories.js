import React, { useState, useEffect } from "react";
import axios from "axios";

import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categories.length) {
      return;
    }

    axios.get("http://localhost:4000/api/category")
    .then(response => {
        const sortedCategories = response.data.sort((first, second) => first.order - second.order);
        setCategories(sortedCategories || []);
    });
  
  }, [categories]);

  if (!categories.length) {
    return "No categories available";
  }

  return (
    categories.map((category, index) => category.enabled && <Category key={category.key} category={category} index={index%2} />)
  )
}

export default Categories;
