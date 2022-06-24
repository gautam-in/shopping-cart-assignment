import React, { useState } from "react";
import "./Dropdown.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLocation } from "react-router-dom";

export default function Dropdown({ items, handleProduct }) {
  const [name, setName] = useState("All Products");

  const { search } = useLocation();

  React.useMemo(() => {
    if (search.includes("?id") && items.length > -1) {
      handleProduct(search.slice(4));
      let selected = items.filter((item) => item.id === search.slice(4));
      setName(selected[0].name);
    }
  }, [search]);

  const handleChange = (event) => {
    setName(event.target.value);
    let selected = items.filter((item) => item.name === event.target.value);
    handleProduct(selected[0].id);
  };

  return (
    <Box className="dropdown">
      <FormControl fullWidth>
        <Select
          className="button"
          labelId="All Product Menu"
          id="All Product"
          value={name}
          label="All Product"
          onChange={handleChange}
          sx={{ padding: "0px" }}
        >
          {items.map((item, index) => (
            <MenuItem value={item.name} key={index} className="list">
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
