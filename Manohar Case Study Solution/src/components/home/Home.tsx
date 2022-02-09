import React from "react";
import { useSelector } from "react-redux";
import HomeCarousel from "./HomeCarousel";
import HomeCategories from "./HomeCategories";

export default function Home() {
  const size: boolean = useSelector((state: any) => state.size);

  const content = (
    <>
      <HomeCarousel />
      <HomeCategories />
    </>
  );
  return size === false ? content : <></>;
}
