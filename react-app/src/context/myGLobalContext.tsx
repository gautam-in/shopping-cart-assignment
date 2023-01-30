import React from "react";
import { ICartData } from "../components/AddToCartModal";

import { ICategoriesData } from "../pages/Home";
import { ProductsData } from "../pages/Products";

export type GlobalContent = {
  categoriesData: ICategoriesData[];
  setCategoriesData: React.Dispatch<React.SetStateAction<ICategoriesData[]>>;
  productsData: ProductsData[];
  setAllProductsData: React.Dispatch<React.SetStateAction<ProductsData[]>>;
  isAddToCartOpen: boolean;
  setIsAddToCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartData: ICartData[];
  setCartData: React.Dispatch<React.SetStateAction<ICartData[]>>;
};

export const MyGlobalContext = React.createContext<GlobalContent>({
  categoriesData: [] as ICategoriesData[],
  setCategoriesData: () => Array<ICategoriesData>,
  productsData: [] as ProductsData[],
  setAllProductsData: () => Array<ProductsData>,
  isAddToCartOpen: false,
  setIsAddToCartOpen: () => false as boolean,
  cartData: [] as ICartData[],
  setCartData: () => Array<ICartData>,
});

export const GlobalContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [categoriesData, setCategoriesData] = React.useState(
    [] as ICategoriesData[]
  );
  const [productsData, setAllProductsData] = React.useState(
    [] as ProductsData[]
  );
  const [isAddToCartOpen, setIsAddToCartOpen] = React.useState<boolean>(false);
  const [cartData, setCartData] = React.useState([] as ICartData[]);

  const value = {
    categoriesData,
    setCategoriesData,
    productsData,
    setAllProductsData,
    isAddToCartOpen,
    setIsAddToCartOpen,
    cartData,
    setCartData,
  };

  return (
    <MyGlobalContext.Provider value={value}>
      {children}
    </MyGlobalContext.Provider>
  );
};
