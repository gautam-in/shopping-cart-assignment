import useCartStore from "@/store/cartStore";
import { pluralize } from "@/utils";
import React from "react";

const CartHeader = () => {
  const { getCartCount } = useCartStore();
  const count = getCartCount();
  return (
    <p>
      My Cart&nbsp;
      {count > 0 && <span>{pluralize(count, "item", "items")}</span>}
    </p>
  );
};

export default CartHeader;
