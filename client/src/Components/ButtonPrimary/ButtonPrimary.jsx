import React from "react";
import { Button } from "@material-ui/core";
import "./ButtonPrimary.scss";

export default (props) => {
  const { title } = props;
  return (
    <div className="btn-style">
      <Button> {title} </Button>
    </div>
  );
};
