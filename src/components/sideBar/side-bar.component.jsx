import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { filterCategoryData } from "../../redux/Category/category.selectors";

import "./side-bar.styles.scss";

const SideBar = ({ categoryData, ...props }) => {
  return (
    <div className="category__container">
      <ul className="category__list">
        {categoryData.map((category) => (
          <li
            key={category.id}
            className={category.id === props.id ? "active" : null}
            onClick={() => props.handleCategoryChange(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  categoryData: filterCategoryData,
});
export default connect(mapStateToProps)(SideBar);
