import React from "react";
import {
  Label,
  MobileMenuContainer,
  Option,
  Select,
} from "./mobile-menu-bar.styles";

const MobileMenuBar = ({ categories, handleChange }) => {
  return (
    <MobileMenuContainer>
      <Select onChange={(e) => handleChange(e.target.value)}>
        {categories.map(({ name, key, id }) => (
          <Option key={key} value={id}>
            {name}
          </Option>
        ))}
      </Select>
    </MobileMenuContainer>
  );
};

export default MobileMenuBar;
