import styles from "./Categories.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

const Categories = () => {
  const categoryData = useSelector((state) => state.categories);
  const { categories, isLoading, hasError } = categoryData;

  const category = categories.map((item) => {
    return (
      item.order > 0 && (
        <article className={styles.category} key={item.key}>
          <img src={item.imageUrl} alt={item.key} />
          <div className={styles["category-content"]}>
            <h1 className={styles["category-name"]}>{item.name}</h1>
            <div className={styles["category-description"]}>
              {item.description}
            </div>
            <Link
              to={`/products/${item.id}`}
              className={styles["category-button"]}
            >{`Explore ${item.key}`}</Link>
          </div>
        </article>
      )
    );
  });

  return (
    <section className={styles["categories-container"]}>
      {category} {isLoading && <Spinner />}{" "}
      {hasError && <div className={styles.error}>Something Went Wrong</div>}
    </section>
  );
};

export default Categories;
