import React from "react";
import Button from "@reusableComponents/Button/Button";
import styles from "./Category.module.scss";

const Category: any = ({ Item, categoryImages }: any) => {
  const { description, name, key, imageUrl, order } = Item;
  return (
    <div
      className={`${styles["category_container"]} disp-flex align-items-center`}
    >
      <img
        src={categoryImages[imageUrl?.split("images/category/")[1]]}
        alt={key}
        height="80%"
        width="40%"
        className={styles.imageStyle}
        style={{ order: order % 2 == 0 ? 2 : 1 }}
      />
      <aside
        className="txt-align-cent wid-100-perc"
        style={{ order: order % 2 == 0 ? 1 : 2 }}
      >
        <h3 className={`${styles.heading}`}>{name}</h3>
        <p className={`${styles.description}`}>{description}</p>
        <Button>Explore {key}</Button>
      </aside>
    </div>
  );
};

export default Category;
