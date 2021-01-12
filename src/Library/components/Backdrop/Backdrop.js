import React from "react";

import classes from "./Backdrop.css";

const Backdrop = props => {
  const { show, clicked } = props;

  if (!show) {
    return null;
  }

  return (
    <div className={classes.Backdrop} onClick={clicked}>
      
    </div>
  );
};

export default Backdrop;
