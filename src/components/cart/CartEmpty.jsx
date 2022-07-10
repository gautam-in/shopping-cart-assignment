import React from "react";

const CartEmpty = () => {
  return (
    <>
      <div className="cart-empty">
        <span className="message text-center d-block">
          <strong className="p-3 d-block text-center">
            No items in your cart
          </strong>
          Your favourites items are just a click away
        </span>
      </div>
    </>
  );
};

export default CartEmpty;
