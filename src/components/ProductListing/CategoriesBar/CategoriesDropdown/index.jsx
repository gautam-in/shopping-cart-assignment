import React, { Component } from "react";
import "./CategoriesDropdown.scss";

class CategoriesDropdown extends Component {
  handleChange = (e) => {
    console.log(e.target.value, window.location);
    if (e.target.value === "all") {
      this.props.setSearchParam("");
      return;
    }
    this.props.setSearchParam({ categoryId: e.target.value });
  };

  render() {
    const { categories, categoryId } = this.props;

    console.log("CategoryID", categoryId);

    return (
      <section className="categories-dropdown">
        <select
          name="categories"
          value={categoryId || ""}
          aria-label="Categories"
          onChange={this.handleChange}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </section>
    );
  }
}

export default CategoriesDropdown;
