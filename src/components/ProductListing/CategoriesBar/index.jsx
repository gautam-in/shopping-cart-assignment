import React, { Component } from "react";
import "./CategoriesBar.scss";
import CategoriesDropdown from "./CategoriesDropdown";
import CategoriesList from "./CategoriesList";

class CategoriesBar extends Component {
  render() {
    const { categories } = this.props;
    console.log(categories);
    return (
      <section className="categories-list">
        <aside>
          <div className="category-dropdown">
            <CategoriesDropdown categories={categories} />
          </div>
          <div className="category-list">
            <CategoriesList categories={categories} />
          </div>
        </aside>
      </section>
    );
  }
}

export default CategoriesBar;
