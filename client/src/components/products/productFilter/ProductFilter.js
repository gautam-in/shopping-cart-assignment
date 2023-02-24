import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/slice/categorySlice";
import { FILTER_BY_CATEGORY } from "../../../redux/slice/filterSlice";
import { selectProducts } from "../../../redux/slice/productSlice";
import styles from "./ProductFilter.module.scss";
const ProductFilter = () => {
  // const { data } = useFetchCollection("categories");
  const [category, setCategory] = useState("All");

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  const allCategories = [
    { name: "All", id: "All" },
    ...categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    }),
  ];

  const filterProducts = (categoryId) => {
    setCategory(categoryId);
    dispatch(FILTER_BY_CATEGORY({ products, category: categoryId }));
  };

  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => {
          return (
            <button
              key={cat.id}
              className={`${category}` === cat.id ? `${styles.active}` : null}
              onClick={() => filterProducts(cat.id)}
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
