import React from "react";
import Image from "next/image";
import style from "../CartItem/cartitem.module.css";
import Button from "../../ui/Button";
import { useDispatchStore } from "public/store";

export default function CartItem({ item }) {
  const dispatch = useDispatchStore();
  const { price, quantity, imageURL, name, id } = item;
  const handleAction = (action, id) => {
    dispatch({ type: action, payload: { id } });
  };
  return (
    <>
      <div className={style.ItemContainer}>
        <div className={style.ImageContainer}>
          <Image src={imageURL} width={100} height={100} />
        </div>
        <div className={style.description}>
          <span>{name}</span>
          <div className={style.quantity}>
            <Button
              onClick={() => {
                handleAction("DECREAMENT", id);
              }}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={() => {
                handleAction("INCREAMENT", id);
              }}
            >
              +
            </Button>
            <span>x</span>
            <span>{price}</span>
          </div>
        </div>
        <div className={style.price}>{price * quantity}</div>
      </div>
    </>
  );
}
export function CartEndMessage({ message }) {
  return (
    <>
      <div className={style.ItemEmptyContainer}>
        <Image src="/static/images/lowest-price.png" width={144} height={51} />
        <span>{message}</span>
      </div>
    </>
  );
}
