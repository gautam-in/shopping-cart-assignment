import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesData, getProductsData } from "./store/actionCreators";
import { CategoriesMenu } from "../../components/Categories-Menu/CategoriesMenu";
import {
  selectCategories,
  selectIsCategoriesLoading,
  selectProducts,
} from "./store/selectors";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { useMemo } from "react";
const Products = () => {
  const categories = useSelector(selectCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const products = useSelector(selectProducts);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesData());
    dispatch(getProductsData());
  }, []);
  const selectCategoryId = useCallback((currentCategoryId) => {
    setSelectedCategoryId(currentCategoryId);
  }, []);
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => selectedCategoryId === product.category
    );
  }, [selectedCategoryId]);
  return (
    <>
      <CategoriesMenu
        data={categories}
        isLoading={isCategoriesLoading}
        selectCategoryId={selectCategoryId}
      />
      <ProductsList data={selectedCategoryId ? filteredProducts : products} />
    </>
  );
};

export default Products;
