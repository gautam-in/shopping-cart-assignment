/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { Button } from "@material-ui/core";
import "./ButtonPrimary.scss";

export default (props) => {
  const { title, click } = props;
  return (
    <div className="btn-style">
      <Button
        onClick={click}
        variant="contained"
        color="secondary"
        type="submit"
      >
        {title} {props.children}
      </Button>
    </div>
  );
};
