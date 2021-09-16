import React, { useEffect, useState } from "react";
import classes from "./CardContainer.module.scss";
import { useHistory } from "react-router-dom";

import cross from "../../assets/images/WhiteCross.svg";

export default function CardContainer({ cartState, changeCartToggleState }) {
  const history = useHistory();

  let temp = 5;
  return (
    <div className={cartState ? classes.ContainerClosed : classes.Container}>
      <section className={classes.CartMainContainer}>
        <header className={classes.Header}>
          <ul className={classes.HeaderSecondaryContainer}>
            <li className={classes.Heading}>MY Cart</li>
            <li
              onClick={changeCartToggleState}
              aria-label="Close"
              className={classes.CloseContainer}
            >
              <img src={cross} alt="Close Icon" />
            </li>
          </ul>
        </header>
        {temp === 0 ? (
          <div className={classes.InformationContainer}>
            <p className={classes.InformationPrimary}>No Item in Cart</p>
            <p className={classes.InformationSecondary}>
              Your Favorite Items are just clicked away
            </p>
          </div>
        ) : (
          <div>Heloo</div>
        )}

        <button
          onClick={() => {
            changeCartToggleState();
            history.push("/products");
          }}
          className={classes.ShoppingBtn}
          type="button"
        >
          Start Shopping
        </button>
      </section>
    </div>
  );
}
