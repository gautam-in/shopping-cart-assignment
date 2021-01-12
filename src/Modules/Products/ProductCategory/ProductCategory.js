import React, { useEffect, useState } from "react";
import { Paper, MenuList, MenuItem } from '@material-ui/core';
import axios from "axios";

const ProductCategory = props => {
  const { setActiveCategory } = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categories.length) {
      return undefined;
    }

    axios.get("http://localhost:4000/api/category")
    .then(response => {
        const sortedCategories = response.data.sort((first, second) => first.order - second.order);
        setCategories(sortedCategories || []);
    });
  
  }, [categories]);

  if (!categories.length) {
    return "No categories available";
  }

  const menuItems = categories.map(category => {
    const { name, enabled, id, key } = category;

    if (!enabled) {
      return null;
    }

    return (
      <MenuItem
        key={key}
        style={{ borderBottom: "2px solid #b3b3b3", fontSize: "0.6rem" }}
        onClick={() => setActiveCategory(id)}
      >
        {name}
      </MenuItem>
    );
  });

  return (
    <Paper
      style={{backgroundColor: "#dbdbdb", padding: "1px"}}
    >
      <MenuList>
        {menuItems}
      </MenuList>
    </Paper>
  )
}

export default ProductCategory;
