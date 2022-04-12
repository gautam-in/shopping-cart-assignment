import styles from "./ProductCategoryList.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCategoryList = () => {
  const { categories } = useSelector((state) => state.categories);
  const category = categories.map((item) => {
    const path = item.id;
    if (item.order > 0) {
      return (
        <li key={item.id}>
          <Link to={path}>{item.name}</Link>
        </li>
      );
    } else {
      return null;
    }
  });
  return (
    <div className={styles["categories-list"]}>
      <ul>{category}</ul>
    </div>
  );
};

export default ProductCategoryList;
