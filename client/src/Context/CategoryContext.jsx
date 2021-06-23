import React, { createContext, useState, useEffect } from "react";
import { getCategoryList } from "Services/services";

export const CategoryContext = createContext();

export default (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const result = await getCategoryList();
    console.log("categoryContext::getCategories", result);
    setCategories(result);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <CategoryContext.Provider value={categories}>
      {props.children}
    </CategoryContext.Provider>
  );
};
