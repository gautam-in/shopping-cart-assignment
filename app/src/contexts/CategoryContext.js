import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const [category, setCategoryList] = useState(null);

  const setCategory = (inputCategory) => {
    if (category === inputCategory) {
      setCategoryList(null);
    } else {
      setCategoryList(inputCategory);
    }
  };
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
