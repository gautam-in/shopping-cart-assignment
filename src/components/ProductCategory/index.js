import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { setFilter } from "../../store/action";

export default function ProductCategory(props) {
  const { category } = props;
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  function getId(categoryId) {
    if (categoryId !== filter) {
      dispatch(setFilter(categoryId));
    } else {
      dispatch(setFilter(null));
    }
  }

  return (
    <aside className="product-category">
      <ul>
        {category.length > 0 &&
          category.map(
            (ele) =>
              ele.enabled && (
                <li
                  key={ele.id}
                  style={{ color: ele.id === filter ? "red" : "black" }}
                  onClick={() => getId(ele.id)}
                >
                  {ele.name}
                </li>
              )
          )}
      </ul>
    </aside>
  );
}
