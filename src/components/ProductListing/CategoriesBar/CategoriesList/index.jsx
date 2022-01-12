import React, { Component } from "react";
import "./CategoriesList.scss";

class CategoriesList extends Component {
  handleChange = (e) => {
    const categoryId = e.target.dataset.categoryid;
    console.log(categoryId);
    if (categoryId === "all") {
      this.props.setSearchParam("");
      return;
    }
    this.props.setSearchParam({ categoryId });
  };
  render() {
    const { categories, categoryId } = this.props;

    console.log("CategoryID", categoryId);

    console.log(categories);
    return (
      <section className="categories-list">
        <ul className="category-group" onClick={this.handleChange}>
          <li data-categoryid="all" className="category-item">
            All
          </li>
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
