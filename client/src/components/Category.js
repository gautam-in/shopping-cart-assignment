import React from 'react';
import { useHistory } from "react-router";
import "../styles/category.scss";

export default function Category(props) {
    const history = useHistory();
  const {category}= props;
  const categoryButtonHandler = (id) => {
    history.push(`/products/${category.id}`);
  };
    return (
        <div className="category-card">
      <div className="image">
        <img src={`http://127.0.0.1:5500/${category.imageUrl}`} alt="" />
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