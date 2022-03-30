import { useEffect, useState } from "react";
import "./sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/home/home.actions";
import {
  selectCategories,
  selectActiveCategories,
} from "../../redux/home/home.selectors";
import { paths } from "../../routing/constants";
import { useHistory, useParams } from "react-router-dom";

const Sidebar = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryId } = useParams();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const activeCategory = useSelector(selectActiveCategories(categoryId));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    setDropdownVisible(!dropdownVisible);
    history.push(
      activeCategory?.[0]?.id === target.id
        ? paths.products
        : `${paths.products}/${target.id}`
    );
  };

  return (
    <aside className="sidebar-container" aria-label="Sidebar">
      <ul className="category-list" onClick={handleChange}>
        {categories.map(({ name, id }) => (
          <li
            key={id}
            className={categoryId === id ? "active" : ""}
            name={name}
            id={id}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="mobile-menu">
        <div
          className="header"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {activeCategory?.[0]?.name ?? "All"}
          <span>{dropdownVisible ? <>&#8743;</> : <>&#8744;</>}</span>
        </div>
        {dropdownVisible && (
          <ul className="category-list" onClick={handleChange}>
            {categories.map(({ name, id }) => (
              <li
                key={id}
                className={categoryId === id ? "active" : ""}
                name={name}
                id={id}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
