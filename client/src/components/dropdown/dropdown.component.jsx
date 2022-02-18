import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
  const navigate = useNavigate();
  return (
    <form>
      <select
        name="category"
        id="category"
        style={props.style}
        onChange={(e) => navigate(`/products/${e.target.value}`)}
      >
        {props.data.map((list, idx) => (
          <option value={list.key} key={idx}>
            {list.name}
          </option>
        ))}
      </select>
      <br />
    </form>
  );
};

export default Dropdown;
