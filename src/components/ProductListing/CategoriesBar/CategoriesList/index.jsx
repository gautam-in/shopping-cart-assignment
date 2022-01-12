import React, { Component } from "react";
import "./CategoriesList.scss";

class CategoriesList extends Component {
  render() {
    const { categories } = this.props;
    console.log(categories);
    return <section className="categories-list">Categories List</section>;
  }
}

export default CategoriesList;
