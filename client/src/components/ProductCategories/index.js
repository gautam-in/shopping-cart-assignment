import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../api/products";
import classes from "./productCategories.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button";

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All Products");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetchCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <aside className={classes.container}>
      <Button
        className={classes.accordion}
        aria-expanded={showList ? "true" : "false"}
        onClick={() => setShowList((showList) => !showList)}
      >
        <span>{selected}</span>
        <span>▼</span>
      </Button>

      <ul className={classes.mobileNavList}>
        {categories.map((category) => (
          <li
            className={`${classes.tile} ${
              selected === category.id || selected === null
                ? classes.selectedTile
                : ""
            } ${showList ? "" : classes.hidden}`}
            key={category.id}
          >
            <NavLink
              to={`/products/${category.id}`}
              onClick={() => {
                setSelected(category.name);
                setShowList(false);
              }}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ProductCategories;
