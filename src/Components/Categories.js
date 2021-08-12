import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/Categories/categoriesactions";
import Category from "./Category/Category";
export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return categories.loading ? (
    <h2>Loading</h2>
  ) : categories.error ? (
    <h2>{categories.error}</h2>
  ) : (
    <div>
      {categories &&
        categories.categories &&
        categories.categories.map((ele, i) => (
          <Category
            data={ele}
            key={ele.id}
            reverse={i % 2 === 0}
          />
        ))}
    </div>
  );
}
