import dynamic from "next/dynamic";
import React from "react";

const CartBody = dynamic(() => import("@/components/Cart/CartBody"), {
  ssr: false,
});

const CartPage = () => {
  return <CartBody />;
};

export default CartPage;
