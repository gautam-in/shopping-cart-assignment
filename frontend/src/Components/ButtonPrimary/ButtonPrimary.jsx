import React from "react";
import { Button } from "@material-ui/core";
import "./ButtonPrimary.scss";

const ButtonPrimary = (props) => {
  const { title, click } = props;
  return (
    <div className="btn-styled">
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
export default ButtonPrimary;
