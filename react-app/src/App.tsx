import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import { routes } from "./config/routes.config";
import { useScrollToTop } from "./hooks";
import { ICategoriesData } from "./pages/Home";
import { ProductsData } from "./pages/Products";

export type GlobalContent = {
  categoriesData: ICategoriesData[];
  setCategoriesData: React.Dispatch<React.SetStateAction<ICategoriesData[]>>;
  productsData: ProductsData[];
  setAllProductsData: React.Dispatch<React.SetStateAction<ProductsData[]>>;
};

export const MyGlobalContext = React.createContext<GlobalContent>({
  categoriesData: [] as ICategoriesData[],
  setCategoriesData: () => Array<ICategoriesData>,
  productsData: [] as ProductsData[],
  setAllProductsData: () => Array<ProductsData>,
});

function App() {
  const location = useLocation();

  const [categoriesData, setCategoriesData] = React.useState(
    [] as ICategoriesData[]
  );
  const [productsData, setAllProductsData] = React.useState(
    [] as ProductsData[]
  );

  const value = {
    categoriesData,
    setCategoriesData,
    productsData,
    setAllProductsData,
  };

  useScrollToTop();

  return (
    <MyGlobalContext.Provider value={value}>
      <Layout>
        <Routes location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </MyGlobalContext.Provider>
  );
}

export default App;
