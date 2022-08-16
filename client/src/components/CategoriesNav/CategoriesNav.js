import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LinkCss } from "../CategoriesNav/CategoriesNav.style";
import { fetchCategoriesAction } from "../../Action";
import { store } from "../../store";
const categoriesStore = (state) => state.categories.map((category) => category);

function CategoriesNav() {
  //   const [categories, setCategories] = useState([]);
  const categoriesSelect = useSelector(categoriesStore, shallowEqual);

  useEffect(() => {
    store.dispatch(fetchCategoriesAction());
  }, []);
  return (
    <>
      {/* <LinkCss to="/products"><strong>All Products</strong></LinkCss> */}
      {categoriesSelect.map((category) => {
        return (
          <LinkCss key={category.id.toString()} to={`/products/${category.id}`}>
            {category.name}
          </LinkCss>
        );
      })}
    </>
  );
}

export default CategoriesNav;
