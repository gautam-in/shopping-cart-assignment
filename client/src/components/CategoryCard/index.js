import React from "react";
import classes from "./CategoryCard.module.scss";
import Button from "../Button";

function CategoryCard({ name, imageUrl, description, slug, id }) {
  return (
    <section data-testId={"category-card"} className={classes.card}>
      <img
        loading={"lazy"}
        height={"25rem"}
        width={"auto"}
        src={imageUrl}
        className={classes.categoryImage}
        alt={description}
      />
      <div className={classes.details}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button type="link" to={`/products/${id}`}>
          Explore {slug}{" "}
        </Button>
      </div>
    </section>
  );
}

export default CategoryCard;
