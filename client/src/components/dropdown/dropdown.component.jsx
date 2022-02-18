import React from "react";

const Dropdown = (props) => {
  return (
    <form>
      <select name="category" id="category" style={props.style}>
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
