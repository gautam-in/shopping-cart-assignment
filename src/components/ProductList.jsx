import React from "react";
import "./ProductList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/action";
function ProductList(props) {
  const { category } = props;
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  function getId(e) {
    if (e.target.name != filter) {
      dispatch(setFilter(e.target.name));
    } else {
      dispatch(setFilter(null));
    }
  }
  return (
    <aside className="product-category">
      <ul role="list">
        {category.length > 0 &&
          category.map(
            (ele) =>
              ele.enabled && (
                <li
                  role="listitem"
                  key={ele.id}
                  style={{ color: ele.id == filter ? "red" : "black" }}
                >
                  <a name={ele.id} onClick={getId}>
                    {ele.name}
                  </a>
                </li>
              )
          )}
      </ul>
    </aside>
  );
}

export default ProductList;
