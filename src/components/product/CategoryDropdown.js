import styles from "./CategoryDropdown.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryDropdown = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { categories } = useSelector((state) => state.categories);

  const categoryId = pathname.split("/")[2];

  const onChangeHandler = (event) => {
    navigate(`/products/${event.target.value}`);
  };
  const categoryOption = categories.map((item) => {
    if (item.order > 0) {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    } else {
      return null;
    }
  });

  return (
    <aside className={styles["category-dropdown"]}>
      <select
        className={styles["category-select"]}
        value={categoryId ? categoryId : ""}
        onChange={onChangeHandler}
      >
        {categoryOption}
      </select>
    </aside>
  );
};

export default CategoryDropdown;
