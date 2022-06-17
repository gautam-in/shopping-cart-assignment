import React, { useContext, useState } from "react";
import "./Counter.css";
import { BootstrapButton as Button } from "../../BootstrapButton";
import { GlobalContext } from "../../../context/GlobalContext";
import { Typography } from "@mui/material";

export default function Counter({ quantity, price, id, stock }) {
  const { dispatch } = useContext(GlobalContext);

  const editItem = () => {
    dispatch({
      type: "EDIT_ITEM",
      id: id,
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
  console.log(quantity);
  return (
    <div className="counter">
      <Button onClick={() => removeItem()} className={"plusMinusbutton"}>
        -
      </Button>
      <Typography className="counterText">{quantity}</Typography>
      <Button
        onClick={editItem}
        className={"plusMinusbutton"}
        disabled={stock === quantity}
      >
        +
      </Button>
      <Typography className="multiply">&#10005;</Typography>
      <Typography className="counterText">{price}</Typography>
    </div>
  );
}
