import React, { Component } from "react";
import "./CategoriesDropdown.scss";

class CategoriesDropdown extends Component {
  render() {
    const { categories } = this.props;
    console.log(categories);
    return <section className="categories-list">Categories Dropdown</section>;
  }
}

export default CategoriesDropdown;
