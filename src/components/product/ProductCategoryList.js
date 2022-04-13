import styles from "./ProductCategoryList.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCategoryList = () => {
  const { categories } = useSelector((state) => state.categories);
  const category = categories.map((item) => {
    const path = item.id;
    if (item.order > 0) {
      return (
        <li key={item.id}>
          <NavLink
            to={path}
            className={(navData) => (navData.isActive ? styles.activeLink : "")}
          >
            {item.name}
          </NavLink>
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
