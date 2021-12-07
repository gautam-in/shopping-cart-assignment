import React from "react";
// import Image from "../HtmlElements/Image";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import "./CartCount.scss";

export default function CartCount() {
  return (
    <div className="CartCount">
      {/* <Image src="images/cart.svg" alt="Cart image" />
       */}
      <CartIcon />
      <p>0 items</p>
    </div>
  );
}
