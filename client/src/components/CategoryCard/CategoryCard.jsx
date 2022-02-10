import React from "react";
import { useNavigate } from "react-router";
import "./CategoryCard.css";
import Button from "./../Button/Button";

export default function CategoryCard({ category }) {
  const { name, description, imageUrl } = category;
  const navigate = useNavigate();

  const categoryButtonHandler = () => {
    navigate("/products");
  };
  return (
    <section className="category-card">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="desc">
        <h3>{name}</h3>
        <h4>{description}</h4>
        <Button type="submit" onClick={categoryButtonHandler}>
          Explore {name}
        </Button>
      </div>
    </section>
  );
}
