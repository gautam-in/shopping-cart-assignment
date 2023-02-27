import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveCategory,
  selectCategories,
  SET_ACTIVE_CATEGORY,
} from "../../../redux/slice/categorySlice";
import { FILTER_BY_CATEGORY } from "../../../redux/slice/filterSlice";
import { selectProducts } from "../../../redux/slice/productSlice";
import styles from "./ProductFilter.module.scss";
const ProductFilter = () => {
  // const { data } = useFetchCollection("categories");
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = useSelector(selectCategories);
  const category = useSelector(selectActiveCategory);
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const allCategories = [
    { name: "All", id: "All" },
    ...categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    }),
  ];

  const filterProducts = (event) => {
    const categoryId = event.target.getAttribute("data-item-id");
    dispatch(SET_ACTIVE_CATEGORY({ category: categoryId }));
    dispatch(FILTER_BY_CATEGORY({ products, category }));
  };

  useEffect(() => {
    setActiveCategory(category);
  }, [category]);

  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category} onClick={filterProducts}>
        {allCategories.map((cat, index) => {
          return (
            <button
              key={cat.id}
              className={
                `${activeCategory}` === cat.id ? `${styles.active}` : null
              }
              data-item-id={cat.id}
              // onClick={() => filterProducts(cat.id)}
            >
              &#8250; {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
