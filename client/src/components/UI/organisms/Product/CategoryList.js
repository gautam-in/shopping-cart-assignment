import React, { useEffect, useState } from "react";
import Api from "../../atoms/util/Api";
import "./ProductList.scss";
import { useHistory } from "react-router-dom";

const CategoryList = ({ filterId, setFilterId }) => {
  const history = useHistory();

  const [category, setCategory] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    Api.getCategories().then((data) => {
      setCategory(data);
    });
  }, []);

  useEffect(() => {
    let activeCategory = category.filter(
      (categoryList) => categoryList.id === filterId
    );
    activeCategory && activeCategory.length
      ? setActiveCategory(activeCategory[0].name)
      : setActiveCategory(null);
  }, [filterId, category]);

  useEffect(() => {
    setActiveId(filterId);
  }, [filterId]);

  const handleClick = (value) => {
    if (activeId !== value) {
      history.push({
        pathname: "/product",
        search: `?category=${value}`,
      });
      setActiveId(value);
    } else {
      history.push({
        pathname: "/product",
      });
    }
  };

  const CategoryList = category.map((category) => {
    const { id, name } = category;
    return (
      <li
        aria-hidden="true"
        key={id}
        className={activeId === id ? "is-active" : ""}
        onClick={() => handleClick(id)}
      >
        <span>{name}</span>
      </li>
    );
  });
  const categoriesOptionList = category.map((category) => {
    const { id, name } = category;
    return (
      <option key={id} data-testid="select-option" value={id}>
        {name}
      </option>
    );
  });

  return (
    <div
      className="categories-filter-data-wrap"
      data-testid="product-categories"
    >
      <ul className="clearfix" style={{ paddingLeft: "0px" }}>
        {CategoryList}
      </ul>
      <div
        className="product-categories-dropdown"
        data-testid="product-filter-select"
      >
        <select
          value={activeId || ""}
          onChange={(e) => handleClick(e.target.value)}
          data-testid="select"
        >
          <option value="" data-testid="select-option">
            select Categories
          </option>
          {categoriesOptionList}
        </select>
      </div>
    </div>
  );
};
export default CategoryList;
