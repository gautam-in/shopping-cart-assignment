import React from "react";
import { useHistory } from "react-router-dom";

export default function Sidebar({ filteredCategory,selectedID }) {
 const history = useHistory();
  const changeProduct = (id)=> {
    if (id) {
      history.push(`/products/${id}`);
    } else {
      history.push(`/products`);
    }

    window.scrollTo(0, 0);
  }
  return (
    <aside className="sidebar">
      <ul className="sidebar-category">
      {filteredCategory.map((category) => (
        <li
          onClick={() => changeProduct(category.id)}
          key={category.id}
          className={ selectedID === category.id ? "sidebar-category-li-active ":""}
        > {category.name}
       
        </li>
      ))}
      </ul>
    </aside>
  );
}
