import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import Item from "./Item";
import classes from "./ProductList.module.scss";

const ProductList = props => {
  const { activeCategory } = props;

  const [categoryProduct, setCategoryProduct] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (categoryProduct === activeCategory && productList.length) {
      return undefined;
    }

    axios.get("http://localhost:4000/api/product")
    .then(response => {
        let filteredProduct = response.data;
        if (activeCategory) {
          filteredProduct = filteredProduct.filter(product => product.category === activeCategory);
          setCategoryProduct(activeCategory);
        }
        setProductList(filteredProduct);
    });

  }, [activeCategory, categoryProduct, productList.length]);

  if (!productList.length) {
    return "No Item";
  }

  const productItems = productList.map(productItem => {

    return (
      <Grid key={productItem.id} item xs={3} className={classes.ProductItemGrid}>
        <Item  productItem={productItem} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={1}>
      {productItems}
    </Grid>
  )
}

export default ProductList;
