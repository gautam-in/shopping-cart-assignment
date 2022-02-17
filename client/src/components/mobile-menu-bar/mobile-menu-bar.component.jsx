import React from "react";
import {
  Label,
  MobileMenuContainer,
  Option,
  Select,
} from "./mobile-menu-bar.styles";

const MobileMenuBar = ({ categories, onChange }) => {
  return (
    <MobileMenuContainer>
      <Label>sqsq</Label>
      <Select>
        {categories.map(({ name, key }) => (
          <Option key={key} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </MobileMenuContainer>
  );
};

export default MobileMenuBar;
