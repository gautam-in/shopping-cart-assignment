import React, { useEffect, useState } from "react";
import "./navigation.styles.scss";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCategories } from "../../Redux/CategoryReducer/cate-action";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  const { getCategory, categoryList, category } = props;
  const { categories } = categoryList;

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="navbar-categories">
      <ul aria-label="category navigation">
        {categories &&
          categories.map((cate) => (
            <Link
              className={`category-bar ${
                cate.id === categoryList.categoryId ? "activeCategory" : null
              }`}
              to={`/product`}
              key={cate.id}
              onClick={(e) => category(cate.id, e)}
            >
              {cate.name}
            </Link>
          ))}
      </ul>

      <select
        className="selector-categories"
        onChange={(event) => category(event.target.value)}
        value={categoryList.categoryId || ""}
      >
        {categories &&
          categories.map((cate) => (
            <option key={cate.id} value={cate.id}>
              {" "}
              {cate.name}{" "}
            </option>
          ))}
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categoryList: state.cateId,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch(getCategories()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  NavigationBar
);
