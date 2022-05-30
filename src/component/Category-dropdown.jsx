import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/slices/cart/cart.selector";
import { useNavigate } from "react-router-dom";

const CategoryDropdown = () => {
  const navigate = useNavigate();
  const categoriesItems = useSelector(selectCartItems);
  console.log(categoriesItems);

  const handleChange = (e) => {
    console.log(e.target.value);
    navigate(`/products/${e.target.value}`);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {categoriesItems.map((category) => (
          <option value={category.id} key={category.key}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
