import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../store/categories/category.action";
import { selectCategoryData } from "../store/categories/category.selector";
import { fetchCategoryData } from "../utils/server/server.util";
import "./Categories.scss";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryData = async () => {
      const categoryData = await fetchCategoryData();
      dispatch(setCategoryData(categoryData));
    };
    getCategoryData();
  }, []);

  const categoryItems = useSelector(selectCategoryData);

  return (<section className="categoryContainer">
      {categoryItems.map(categoryItem => (
          categoryItem.enabled ? (<CategoryItem item={categoryItem} key = {categoryItem.id} />) : null
      ))
      }
  </section>);
};

export default Categories;
