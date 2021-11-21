import React from "react";
import styles from "./Cart.module.css";
import classNames from "classnames";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 0,
  },
  content: {
    top: "5rem",
    right: 0,
    padding: 0,
    outline: 0,
    margin: 0,
    left: "auto",
    backgroundColor: "white",
    width: "38%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export const Cart = ({ closeCart }) => {
  return (
    <Modal isOpen={true} style={customStyles} ariaHideApp={false}>
      <div className=" flex justify-between items-center p-6 bg-black">
        <h1 className="text-2xl text-white sm:text-sm">
          My Cart <span className="text-base sm:text-xs">(0 item)</span>
        </h1>
        <button onClick={closeCart} className="text-white text-2xl sm:text-sm">
          X
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-medium sm:text-sm">
          No items in your cart
        </h2>
        <p className="sm:text-xs">your favorite items are just a click away</p>
      </div>

      <button
        className={classNames(styles.buttonBackground, "font-medium p-3")}
      >
        <p className="text-white sm:text-sm"> Start Shopping</p>
      </button>
    </Modal>
  );
};
