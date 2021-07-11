import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);

  React.useEffect(() => {
    (async function getCategory() {
      const data = await fetch('http://localhost:5000/categories').then((res) =>
        res.json()
      );
      setCategoryData(data);
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
