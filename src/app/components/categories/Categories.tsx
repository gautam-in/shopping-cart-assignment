"use client";

import useSWR, { Fetcher } from "swr";
import OffersCard from "./CategoriesCard";
import React, { useEffect, useState } from "react";

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

const Categories = () => {
  const { data, error } = useSWR(
    "/api/staticdata?param=server/categories",
    fetcher
  );
  return (
    <div className="">
      {<OffersCard offerData={data} />}
    </div>
  );
};

export default Categories;
