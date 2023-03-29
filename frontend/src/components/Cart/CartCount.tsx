import useCartStore from "@/store/cartStore";
import { pluralize } from "@/utils";
import React from "react";

const CartCount = () => {
  const { getCartCount } = useCartStore();
  const count = getCartCount();
  return <span>{pluralize(count, "item", "items")}</span>;
};

export default CartCount;
