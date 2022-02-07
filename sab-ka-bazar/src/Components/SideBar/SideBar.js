import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "../Header/NavBarElements";
import { ListContainer, ListItem } from "./SideBarElements";

const SideBar = ({ id }) => {
  const {
    state: { categories },
  } = useContext(CartContext);
  return (
    <ListContainer>
      {categories.length > 0 &&
        categories.map((item) => {
          if (item.order < 0) return null;
          return (
            <ListItem key={item.id} onClick={() => id(item.id)}>
              {item.name}
            </ListItem>
          );
        })}
    </ListContainer>
  );
};

export default SideBar;
