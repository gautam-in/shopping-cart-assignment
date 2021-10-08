import React from "react";
import { ReactComponent as Cart } from "../Assets/images/cart.svg";

const imageSvg = (props) => {
  const { name, style = {} } = props;
  return (
    <div className={`App max-height-100`} style={style}>
      {name === "cart" ? <Cart /> : null}
    </div>
  );
};
export default imageSvg;