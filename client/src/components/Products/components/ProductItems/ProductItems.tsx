import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./components/ProductItem/ProductItem";
import { productImages } from "../../../../utility/groupImage";

const ProductItems: any = ({ filterData }: any) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response: any) => {
      setData(response.data);
      setFilteredData(response.data);
    });
  }, []);

  useEffect(() => {
    if (filterData) {
      let filteredData: any = data.filter(
        (item: any) => item.category === filterData
      );
      setFilteredData(filteredData);
    }
  }, [filterData]);

  let items = filteredData.map((item: any) => (
    <ProductItem Item={item} categoryImages={productImages} key={item.id} />
  ));

  return <div className="disp-flex jstf-ctnt-sp-btwn flex-wrap">{items}</div>;
};

export default ProductItems;
