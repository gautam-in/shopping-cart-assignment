import React from "react";
import styles from "./Cart.module.css";
import classNames from "classnames";

export const Cart = ({ closeCart }) => {
  return (
    <div className="absolute flex flex-col place-content-between h-5/6 w-2/6 right-0 mr-16">
      <div className=" flex justify-between items-center p-6 bg-black">
        <h1 className="text-2xl text-white">
          My Cart <span className="text-base">(0 item)</span>
        </h1>
        <button onClick={closeCart} className="text-white text-2xl">
          X
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-medium">No items in your cart</h2>
        <p>your favorite items are just a click away</p>
      </div>

      <button
        className={classNames(styles.buttonBackground, "font-medium p-2")}
      >
        <p className="text-white"> Start Shopping</p>
      </button>
    </div>
  );
};
