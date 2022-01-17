import React, { Component } from "react";
import "./CategoriesBar.scss";
import CategoriesDropdown from "./CategoriesDropdown";
import CategoriesList from "./CategoriesList";

class CategoriesBar extends Component {
  render() {
    const { categories, categoryId } = this.props;

    return (
      <section className="categories-list">
        <aside>
          <div className="category-dropdown">
            <CategoriesDropdown
              categoryId={categoryId}
              categories={categories}
              setSearchParam={this.props.setSearchParam}
            />
          </div>
          <div className="category-list">
            <CategoriesList
              categoryId={categoryId}
              categories={categories}
              setSearchParam={this.props.setSearchParam}
            />
          </div>
        </aside>
      </section>
    );
  }
}

export default CategoriesBar;
