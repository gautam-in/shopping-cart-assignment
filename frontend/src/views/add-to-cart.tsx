import { useEffect } from "react";
import { AddToCart } from "../apis/add-to-cart";

type Props = {};

export const Cart = (props: Props) => {
  useEffect(() => {
    AddToCart();
  });

  return <div>Banners</div>;
};
