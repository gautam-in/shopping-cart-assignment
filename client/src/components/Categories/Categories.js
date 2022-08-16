import React, { useEffect, useState } from "react";
import Category from "./Category";
import { fetchCategoriesAction } from "../../Action";
import { store } from "../../store";
import { shallowEqual, useSelector } from "react-redux";
const categoriesStore = (state) => state.categories.map((category) => category);

function Categories() {
  const [categories, setCategories] = useState([]);
  // const [categoriesEle, setcategoriesEle] = useState([]);
  const categoriesSelect = useSelector(categoriesStore, shallowEqual);

  useEffect(() => {
    store.dispatch(fetchCategoriesAction());
  }, []);
  useEffect(() => {
    const getCat = categoriesSelect.map((category, index) => (
      <Category category={category} index={index} key={category.id} />
    ));
    setCategories(getCat);
  }, [categoriesSelect]);
  return <div className="container">{categories}</div>;
}

export default Categories;
