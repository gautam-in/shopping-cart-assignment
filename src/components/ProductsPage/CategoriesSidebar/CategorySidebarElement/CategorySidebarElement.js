import React from "react";
import "./CategorySidebarElement.scss";
import { Link } from "react-router-dom";


function CategorySidebarElement(props) {
  return (
    <li
      className={
        props.seletcedCategory
          ? "category_list selected_list"
          : "category_list "
      }
      onClick={props.categorySelected}
    >
      <Link
        to={props.seletcedCategory ? "/products/" : "/products/" + props.id}
        className={
          props.seletcedCategory
            ? "categorySidebarElement  selected_anchor"
            : "categorySidebarElement"
        }
      >
        {props.categoryName}
      </Link>
    </li>
  );
}

export default CategorySidebarElement;
