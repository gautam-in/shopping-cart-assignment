import React from "react";
import Image from "next/image";
import style from "../Homecard/Homecard.module.css";
import Button from "../../ui/Button";
import { useRouter } from "next/router";

export default function Homecard({ item }) {
  const router = useRouter();

  const { name, description, enabled, order, imageUrl, id, key } = item;
  return (
    <>
      {enabled ? (
        <div
          className={`${style.Homecard_container} ${
            order % 2 == 0 ? style.even : ""
          }`}
        >
          <div className={style.Homecard_image}>
            <Image
              width={"100%"}
              height={"100%"}
              objectFit="contain"
              src={imageUrl}
              alt={name}
            ></Image>
          </div>
          <div className={style.Homecard_description}>
            <h1>{name}</h1>
            <p>{description}</p>
            <Button
              onClick={() => {
                router.push(`/products?category=${id}`);
              }}
            >{`Explore ${name}`}</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
