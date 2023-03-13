import React from "react";

import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import "./../app/globals.css";

import { filterAction } from "@/store/filter-slice";
import useSWR, { Fetcher } from "swr";
import { useSelector, useDispatch } from "react-redux";
import { productAction } from "@/store/products-slice";

interface LayoutComponentProps {
  childComponent?: React.ReactNode;
}

const Layout: React.FC<LayoutComponentProps> = ({ childComponent }) => {
  console.log("Layout Component Loaded ...");

  const fetcher = (url: any) =>
    fetch(url)
      .then((res) => res.json())
      .then((res) => JSON.parse(res));
  const dispatcher = useDispatch();

  const { data, error } = useSWR(
    "/api/staticdata?param=server/products",
    fetcher
  );

  if (data) {
    dispatcher(productAction.setProductState(data));
    dispatcher(filterAction.filterProductCategory("-"));
    console.log("Going to set product data to store ");
  }

  return (
    <>
      <Header />
      <div className="mx-auto my-0 max-w-screen-lg">{childComponent}</div>
      <Footer />
    </>
  );
};

export default Layout;
