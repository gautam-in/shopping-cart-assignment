import { useEffect } from "react";
import { getCategories } from "../apis/category";
type Props = {};

export const Categories = (props: Props) => {
  useEffect(() => {
    getCategories();
  });
  return <div>Categories</div>;
};
