import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import axios from "axios";

const ProductCategoryButton = props => {
  const { setActiveCategory, activeCategory } = props;

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
        value={id}
      >
        {name}
      </MenuItem>
    );
  });

  return (
    <>
      <FormControl style={{minWidth: "270px"}}>
        <InputLabel id="demo-controlled-open-select-label">Select Categories</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={activeCategory || ""}
          onChange={id => setActiveCategory(id.target.value)}
        >
          {menuItems}
        </Select>
      </FormControl>
      <br /><br />
    </>
  )
}

export default ProductCategoryButton;
