import React from 'react';
import { useHistory } from "react-router";
import "./Category.scss";

export default function Category(props) {
    const history = useHistory();
  const {category}= props;
  const categoryButtonHandler = (id) => {
    history.push(`/products/${category.id}`);
  };
    return (
        <div className="category-card">
      <div className="image">
        <img src={category.imageUrl} alt="" />
      </div>

      <div className="desc">
        <h3>{category.name}</h3>
        <h4>{category.description}</h4>
        <button type="submit" onClick={categoryButtonHandler}>
          Explore {category.key}
        </button>
      </div>
    </div>
  );
}