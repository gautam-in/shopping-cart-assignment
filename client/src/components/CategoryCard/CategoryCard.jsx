import React from "react";
import classes from "./CategoryCard.module.scss";
import { useHistory } from "react-router-dom";

export default function CategoryCard({
  imageUrl,
  alt,
  name,
  order,
  description,
}) {
  const history = useHistory();
  return (
    <div
      style={{ flexDirection: order % 2 === 0 ? "row" : "row-reverse" }}
      className={classes.Container}
    >
      <img className={classes.CategoryImg} src={imageUrl} alt={alt} />
      <div className={classes.CategoryDetailsDiv}>
        <h3 className={classes.CategoryName}>{name}</h3>
        <p className={classes.CategoryDescription}>{description}</p>
        <button
          type="button"
          onClick={() =>
            history.push({
              pathname: "/products",
            })
          }
          className={classes.CategoryButton}
        >
          Explore {alt}
        </button>
      </div>
    </div>
  );
}
