import { createContext } from "react";

export const CategoryListingContext = createContext("");

export default function CategoryListingProvider({ children, value }) {
  return (
    <CategoryListingContext.Provider value={value}>
      {children}
    </CategoryListingContext.Provider>
  );
}
