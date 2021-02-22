import React from "react";

import Classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Aux from "../../../hoc/Aux/Aux";

const NavigationItemsRight = (props) => (
  <ul className={Classes.NavigationItemsRight}>
    {true ? (
      <Aux>
        <NavigationItem link="/login" exact>
          Login
        </NavigationItem>
        <NavigationItem link="/register" exact>
          Register
        </NavigationItem>
      </Aux>
    ) : (
        <NavigationItem link="/logout" exact>
          Logout
        </NavigationItem>
      )}
  </ul>
);

export default NavigationItemsRight;
