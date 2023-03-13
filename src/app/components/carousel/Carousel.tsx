import React from "react";
import useSWR, { Fetcher } from "swr";
import CarouselSlides from "./CarouselSlides";

const fetcher = (url: any) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => JSON.parse(res));

function Carousel() {
  const { data, error } = useSWR(
    "/api/staticdata?param=server/banners",
    fetcher
  );

  return (
    <div>
      <CarouselSlides carouselData={data} />
    </div>
  );
}

export default Carousel;
