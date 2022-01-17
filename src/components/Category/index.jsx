import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

class Category extends Component {
  render() {
    const images = require.context("../..", true);
    const { category, idx } = this.props;
    let categoryClass = "category";
    if (idx % 2 === 1) categoryClass += " reverse";

    return (
      <div className={categoryClass}>
        <div className="category-image">
          <img src={images(`.${category.imageUrl}`)} alt={category.name} />
        </div>
        <div className="description">
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <Link to={"/products?categoryId=" + category.id}>
            <button className="explore-category">
              Explore {category.name}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Category;
