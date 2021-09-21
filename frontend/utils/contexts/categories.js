import { createContext, useContext, useState, useEffect } from 'react';

import { useFetch } from '../customHooks';
import { ENDPOINTS } from '../constants';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CategoriesStateProvider({ children }) {
  const url = process.env.API_URL + ENDPOINTS.CATEGORIES;

  const { data } = useFetch(url);

  return (
    <LocalStateProvider
      value={{
        categories:
          data &&
          data.length > 0 &&
          data
            .filter((category) => category.enabled)
            .sort((a, b) => a.order - b.order),
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCategories() {
  const all = useContext(LocalStateContext);
  return all;
}
export { CategoriesStateProvider, useCategories };
