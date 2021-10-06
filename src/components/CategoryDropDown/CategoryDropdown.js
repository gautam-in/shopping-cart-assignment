import React from "react";
import "./CategoryDropdown.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/category/categoryAction";

export default function CategoryDropdown({ data }) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.category.categoryId);

  const categoryClick = (val) => {
    dispatch(setSelectedCategory(val));
  };

  return (
    <div className="category-dropdown">
      <select
        className="category-dropdown-select"
        value={selectedId}
        onChange={(e) => categoryClick(e.target.value)}
      >
        <option value="" className="selected">
          All Category
        </option>
        {data.map((el) => (
          <option
            className="category-dropdown-option"
            value={el.id}
            key={el.id}
          >
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
}
