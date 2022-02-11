import React from "react";
import "./style.scss";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category, direction }) {
  const navigate = useNavigate();

  const ImageSection = (
    <img
      src={category.imageUrl}
      className="catSection__img"
      alt={category.name}
    />
  );

  const contentSection = (
    <div className="category_details">
      <div className="category__name">{category.name}</div>
      <p className="category_para">{category.description}</p>
      <Button
        className="category_button"
        onClick={() => {
          navigate(`/PLP/${category.id}`);
        }}
      >
        Explore {category.name}
      </Button>
    </div>
  );

  return (
    <section className="catSection">
      {direction == "left" && (
        <>
          {ImageSection}
          {contentSection}
        </>
      )}
      {direction == "right" && (
        <>
          {contentSection}
          {ImageSection}
        </>
      )}
    </section>
  );
}

export default CategoryCard;
