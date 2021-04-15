import React, { useEffect, useState } from "react";
import axios from "axios";
import { categoryImages } from "../../../../utility/groupImage";
import Category from "./components/Category/Category";
import styles from "./Categories.module.scss";

const Categories: any = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((response: any) => {
      setData(response.data);
    });
  }, []);

  let items = data
    .sort((item1: any, item2: any) => item1.order - item2.order)
    .map((item: any) =>
      item.order !== -1 ? (
        <Category Item={item} categoryImages={categoryImages} key={item.id} />
      ) : null
    );

  return (
    <div
      className={`${styles["category_main_container"]} dis-flex align-items-center flex-dir-col ovrflow-hid`}
    >
      {items}
    </div>
  );
};

export default Categories;
