"use client";

import useSWR, { Fetcher } from "swr";
import ProductsCard from "./ProductsCard";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productAction, productsData } from "../../../store/products-slice";
import { filterAction } from "@/store/filter-slice";

interface OfferCardData {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

const fetcher = (url: any) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => JSON.parse(res));

const Products = () => {
  console.log("Products Component Loaded ...");
  let data = useSelector((state: any) => state.product);
  console.log("ProductData from store : ", data);

  // const dispatcher = useDispatch();

  // const { data, error } = useSWR(
  //   "/api/staticdata?param=server/products",
  //   fetcher
  // );

  // if (data) {
  //   dispatcher(productAction.setProductState(data));
  //   dispatcher(filterAction.filterProductCategory("-"));
  //   console.log("Going to set product data to store ");
  // }

  return (
    <div className="w-10/12 flex flex-wrap p-4 gap-4 justify-center">
      {<ProductsCard productData={data} />}
    </div>
  );
};

export default Products;
