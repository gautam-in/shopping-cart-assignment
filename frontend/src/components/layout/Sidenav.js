import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../Features/categories/categoriesSlice";

function Sidenav({ categories }) {
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );

  const handleClick = (cat) => {
    if (currentCategory === cat) {
      dispatch(setCurrentCategory(""));
    } else {
      dispatch(setCurrentCategory(cat));
    }
  };

  return (
    <aside className="side-nav">
      <nav aria-label="product category filter">
        <ul>
          {categories.map((cat) => {
            return (
              <li key={cat.id}>
                <button
                  className={currentCategory === cat.id ? "active" : ""}
                  onClick={() => handleClick(cat.id)}
                >
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidenav;
