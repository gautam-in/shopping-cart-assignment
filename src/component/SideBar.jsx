import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.scss";

const SideBar = ({ toggleActiveCategoryCallback, activeCategory }) => {
  const [categoriesItems, setCategoriesItem] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    await axios
      .get("http://localhost:8000/categories")
      .then((res) =>
        setCategoriesItem(
          res.data.filter((category) => category.enabled === true)
        )
      )
      .catch((error) => console.log("Error occured", error.message));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = (e, category) => {
    e.preventDefault();
    toggleActiveCategoryCallback(category.id);
    category.id === activeCategory
      ? navigate("/products")
      : navigate(`/products/${category.id}`);
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar">
        {categoriesItems.map((category) => {
          return (
            <div
              className={`sidebar__item ${
                activeCategory === category.id ? "sidebar__item--active" : ""
              }`}
              onClick={(e) => handleClick(e, category)}
              key={category.id}
            >
              {category.name}
            </div>
          );
        })}
      </div>
      <label style={{ display: "none" }} htmlFor="select_categories">
        Categories
      </label>
      <select
        id="select_categories"
        className="sidebar-dropdown"
        value={activeCategory}
        onChange={(event) => toggleActiveCategoryCallback(event.target.value)}
      >
        <option value="all">Please select category</option>
        {categoriesItems.map((category) => (
          <option key={category.key} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SideBar;
