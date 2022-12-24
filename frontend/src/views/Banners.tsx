import { useEffect } from "react";
import { getBanners } from "../apis/banner";

type Props = {};

export const Banners = (props: Props) => {
  useEffect(() => {
    getBanners();
  });

  return <div>Banners</div>;
};
