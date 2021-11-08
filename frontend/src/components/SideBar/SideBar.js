import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProducts,
  getAllCategories,
} from "../../features/products/productSlice";
import "./SideBar.scss";

export default function SideBar() {
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();

  const fetchProductsHandler = (e) => {
    console.log(e.target.id);
    dispatch(fetchAsyncProducts(e.target.id));
  };
  return (
    <div className="sidenav-container">
      {categories.length > 0 &&
        categories.map((category) => (
          <div className="sidenav" key={category.id}>
            <div className="category-name">
              <h4 id={category.id} onClick={(e) => fetchProductsHandler(e)}>
                {category.name}
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}
