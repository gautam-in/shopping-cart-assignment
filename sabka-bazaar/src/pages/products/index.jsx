import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesData, getProductsData } from "./store/actions";
import CategoriesMenu from "../../components/Categories-Menu/CategoriesMenu";
import {
  selectCategories,
  selectCategoriesError,
  selectIsCategoriesLoading,
  selectIsProductsLoading,
  selectProducts,
  selectProductsError,
} from "./store/selectors";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useMemo } from "react";
import { Loader } from "../../components/Loader/Loader";
import { ApiError } from "../../components/ApiError/ApiError";
const Products = () => {
  const categories = useSelector(selectCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const products = useSelector(selectProducts);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const productsError = useSelector(selectProductsError);
  const categoriesError = useSelector(selectCategoriesError);
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
  return isCategoriesLoading || isProductsLoading ? (
    <Loader />
  ) : productsError || categoriesError ? (
    <ApiError errorMessage={productsError || categoriesError} />
  ) : (
    <>
      <CategoriesMenu
        data={categories}
        selectCategoryId={selectCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
      <ProductsList data={selectedCategoryId ? filteredProducts : products} />
    </>
  );
};

export default Products;
