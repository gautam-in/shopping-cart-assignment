import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ProductList.module.scss";

const ProductList: any = (props: any) => {
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
        <a
          className={`${styles.listItem} ${
            props.filterData === item.id && styles.activeLink
          }`}
          onClick={(e: any) => props.handleNavigation(item.id)}
        >
          {item.name}
        </a>
      ) : null
    );

  return <nav className={`${styles.listContainer}`}>{items}</nav>;
};

export default ProductList;
