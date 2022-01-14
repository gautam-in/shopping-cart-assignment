import React, { Component } from "react";
import "./CategoriesList.scss";

class CategoriesList extends Component {
  handleClick = (e) => {
    const categoryId = e.target.dataset.categoryid;
    if (e.target.className.includes("active-category")) {
      this.props.setSearchParam("");
      return;
    }
    this.props.setSearchParam({ categoryId });
  };
  render() {
    const { categories, categoryId } = this.props;
    return (
      <section className="categories-list">
        <ul className="category-group" onClick={this.handleClick}>
          {categories.map((category) => (
            <li
              key={category.id}
              data-categoryid={category.id}
              className={
                category.id === categoryId
                  ? "category-item active-category"
                  : "category-item"
              }
            >
              {category.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CategoriesList;
