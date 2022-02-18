import React from "react";
import { MenuBarContainer, MenuItem } from "./menu-bar.styles";

const MenuBar = ({ categories, handleClick }) => {
  return (
    <MenuBarContainer>
      {categories?.map(
        ({ imageUrl, name, id }) =>
          imageUrl && (
            <MenuItem onClick={() => handleClick(id)} key={id}>
              {name}
            </MenuItem>
          )
      )}
    </MenuBarContainer>
  );
};

export default MenuBar;
