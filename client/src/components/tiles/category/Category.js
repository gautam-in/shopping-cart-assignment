import React, { lazy, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Category.module.scss";

const Category = ({category, index}) => {
  return ( 
    <section className={styles.section}>
      {index % 2 === 0 ? // did not use flexdirection: row-reverse for better accessibility
      <>
      <div className={styles.categoryDescriptionContainer}>
        <h1 className={styles.categoryTitle}>{category.name}</h1>
        <div className={styles.categoryDescription} role="description">{category.description}</div>
        <NavLink to={`/products/${category.id}`}>{`Explore ${category.key}`}</NavLink>
      </div> 
      <div className={styles.categoryImageContainer}>
       <img className={styles.categoryImage} src={category.imageUrl} />
      </div>
      </>
      :
      <>
        <div className={styles.categoryImageContainer}>
          <img className={styles.categoryImage} src={category.imageUrl} />
        </div>
        <div className={styles.categoryDescriptionContainer}>
          <h1 className={styles.categoryTitle}>{category.name}</h1>
          <div className={styles.categoryDescription} role="description">{category.description}</div>
            <NavLink to={`/products/${category.id}`}>{`Explore ${category.key}`}</NavLink>
        </div> 
      </>
    }
    </section>
  )
}
export default Category;