import React from "react";
import { useHistory } from "react-router";
import "../styles/categoryCard.scss";

export default function CategoryCard(props) {
  const history = useHistory();
  const { category } = props;

  const categoryButtonHandler = (id) => {
      console.log(category.id)
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
        <button type="submit" onClick={()=>categoryButtonHandler(category.id)}>
          Explore {category.key}
        </button>
      </div>
    </div>
  );
}