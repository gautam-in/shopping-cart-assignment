import React, { useState } from "react";
import classes from "./HamburgerMenu.module.scss";
import arrowUp from "../../assets/images/upArrow.svg";
import arrowDown from "../../assets/images/downArrow.svg";

export default function HamburgerMenu() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  return (
    <div className={classes.Container}>
      <ul>
        <li tabIndex="0" onClick={() => setHamburgerToggle(!hamburgerToggle)}>
          All Products
          {hamburgerToggle ? (
            <img src={arrowUp} alt="Up Arrow" />
          ) : (
            <img src={arrowDown} alt="Down Arrow" />
          )}
        </li>

        {hamburgerToggle && <li tabIndex="0">All product</li>}
      </ul>
    </div>
  );
}
