import React from "react";

const CartModalHeader = ({ quantity, setIsCartVisible }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#232629",
        color: "#fff",
        fontWeight: 700,
        padding: 16,
      }}
    >
      <span>My Cart{quantity > 0 ? `(${quantity} item(s))` : ""}</span>
      <button
        onClick={() => {
          setIsCartVisible((prev) => !prev);
        }}
        style={{
          border: "none",
          padding: 0,
          margin: 0,
          width: 22,
          backgroundColor: "inherit",
          color: "#fff",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartModalHeader;
