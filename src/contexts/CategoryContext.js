import React, { createContext, useState } from 'react';
export const CategoryContext = createContext('');

const CategoryContextProvider = ({children}) => {

  let [activeCategory, setActiveCategory] = useState('');
      
  return ( 
    <CategoryContext.Provider value={{activeCategory,setActiveCategory}} >
      { children }
    </CategoryContext.Provider>
  );
};
 
export default CategoryContextProvider;