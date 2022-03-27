import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import * as categoryActions from "../../redux/Categories/categories.action";

const Sidebar = () => {
  let dispatch = useDispatch();
  let categoryItems = useSelector((state) => {
    return state.categories;
  });
  useEffect(() => {
    if (categoryItems.categories.length === 0) {
      dispatch(categoryActions.getAllCategories());
    }
  }, []);
  let { categories } = categoryItems;
  categories = categories.sort((a, b) => a.order - b.order).filter((a) => a.enabled);
  return (
    <React.Fragment>
      {categories.map((category) => {
        return (
          <>
            <Link to={`/products/${category.id}`} key={category.id} className="category-link">
              {category.name}
            </Link>
          </>
        );
      })}
    </React.Fragment>
  );
};

export default Sidebar;
