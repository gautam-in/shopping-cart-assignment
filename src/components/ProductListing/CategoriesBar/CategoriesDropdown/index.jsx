import React, { Component } from "react";
import "./CategoriesDropdown.scss";

class CategoriesDropdown extends Component {
  render() {
    const { categories, categoryId } = this.props;

    return (
      <section className="categories-dropdown">
        <select
          name="categories"
          value={categoryId ? categoryId : ""}
          aria-label="Categories"
          // onChange={this.handleChange}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
      </section>
    );
  }
}

export default CategoriesDropdown;
