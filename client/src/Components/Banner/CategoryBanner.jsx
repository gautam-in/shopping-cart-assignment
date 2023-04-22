import { NavLink } from "react-router-dom";
import styles from "./CategoryBanner.module.scss";

const Category = ({category, index}) => {
  return ( 
    <section className={styles.section}>
      {index % 2 === 0 ?
      <>
      <div className={styles.categoryDescriptionContainer}>
        <h1 className={styles.categoryTitle}>{category.name}</h1>
        <p className={styles.categoryDescription} >{category.description}</p>
        <NavLink to={`/products/${category.id}`}>{`Explore ${category.name}`}</NavLink>
      </div> 
      <div className={styles.categoryImageContainer}>
       <img className={styles.categoryImage} src={category.imageUrl} alt="banner" />
      </div>
      </>
      :
      <>
        <div className={styles.categoryImageContainer}>
          <img className={styles.categoryImage} src={category.imageUrl} alt="banner" />
        </div>
        <div className={styles.categoryDescriptionContainer}>
          <h1 className={styles.categoryTitle}>{category.name}</h1>
          <p className={styles.categoryDescription}>{category.description}</p>
            <NavLink to={`/products/${category.id}`}>{`Explore ${category.name}`}</NavLink>
        </div> 
      </>
    }
    </section>
  )
}
export default Category;