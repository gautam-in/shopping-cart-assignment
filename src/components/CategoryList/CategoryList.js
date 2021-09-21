import React from "react";
import "./CategoryList.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/category/categoryAction";

export default function CategoryList({ data }) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.category.categoryId);

  const categoryClick = (val) => {
    dispatch(setSelectedCategory(val));
  };

  return (
    <div className="category-list">
      <ul className="category-list-ul">
        {data.map((el) => (
          <li
            className={
              el.id === selectedId
                ? "category-list-li selected"
                : "category-list-li"
            }
            key={el.id}
            onClick={() => categoryClick(el.id)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
