import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import {
  selectCategories,
  isLoadingSelect,
  selectActiveCategory,
} from "../store/slices/categories/categories.selector";
import "../styles/product-page.scss";
import {
  fetchCaregoriesStart,
  setActiveCategory,
} from "../store/slices/categories/categories.action";
import Spinner from "./spinner/spinner";

const ProductsPage = () => {
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(isLoadingSelect);
  const activeCategory = useSelector(selectActiveCategory);
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchCaregoriesStart());
  }, []);

  useEffect(() => {
    if (categoryId && categories?.length) {
      const activeCategory = categories.find(
        (category) => category.id === categoryId
      );
      dispatch(setActiveCategory(activeCategory.id));
    }
  }, [categories, categoryId]);

  const toggleActiveCategory = (categoryId) => {
    dispatch(
      setActiveCategory(activeCategory === categoryId ? "all" : categoryId)
    );
  };

  return (
    <div className="productpage-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SideBar
            toggleActiveCategoryCallback={toggleActiveCategory}
            activeCategory={activeCategory}
          />
          <ProductList activeCategory={activeCategory} />
        </>
      )}
    </div>
  );
};
export default ProductsPage;

// <SideBar
//         toggleActiveCategoryCallback={toggleActiveCategory}
//         activeCategory={activeCategory}
//       />
//       <ProductList key={categories.id} activeCategory={activeCategory} />
