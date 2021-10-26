import React from "react";
import Image from "next/image";
import Button from "../../ui/Button";
import style from "../ProductCard/ProductCard.module.css";
import { useStore, useDispatchStore } from "../../../public/store";
import { useRouter } from "next/router";

export default function ProductCard({ item }) {
  const dispatch = useDispatchStore();
  const { items, total, totalquantity, user, cartOpen, setToggleCart } =
    useStore();
  const router = useRouter();
  const addToCart = () => {
    if (user?.user) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...item,
          quantity: 1,
        },
      });
    } else {
      router.push("/signin");
    }
  };
  const { name, imageURL, description, price, stock, category, sku, id } = item;
  return (
    <>
      <div className={style.Product_Container}>
        <div className={style.Product_Header}>
          <p style={{ padding: "10px" }}>{name}</p>
        </div>
        <div className={style.Product_Content}>
          <div className={style.Product_Image_Container}>
            <div className="Product_Image">
              <Image width={250} height={250} src={imageURL} alt={name}></Image>
            </div>
          </div>
          <div className={style.Product_Content_Description}>
            <p>{description}</p>
          </div>
          <div className={style.Product_Content_Footer_desktop}>
            <div className={style.Product_Content_Footer_desktop_span}>
              {`MRP Rs.${price}`}
            </div>
            <Button
              onClick={(e) => {
                addToCart();
              }}
            >{`Buy Now`}</Button>
          </div>
          <div className={style.Product_Content_Footer_not_desktop}>
            <Button
              onClick={(e) => {
                addToCart();
              }}
            >{`Buy Now @ ${price}`}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
