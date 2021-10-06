import React, { createContext, useState, useEffect } from "react";
import { getCategoryList } from "../Services/services";

export const CategoryContext = createContext();

export default (props) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  const getCategories = async () => {
    const result = await getCategoryList();
    setCategories(result);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, selected, setSelected }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
