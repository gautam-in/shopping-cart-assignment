import React, { useState, useContext } from "react";
import { Grid } from '@material-ui/core';

import { ActiveContext } from "../../Library/context";
import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";
import ProductCategoryButton from "./ProductCategoryButton";

import classes from "./Products.module.scss";

const Products = () => {
  const { history: { location: { state }, action = "" } } = useContext(ActiveContext);

  const { id = null } = state || {};
  
  const [activeCategory, setActiveCategory] = useState((action === "PUSH" && id) || null);


  return (
    <>
      <div style={{flexGrow: "1"}}>
        <Grid container className={classes.ProductCategoryButton}>
          <Grid item xs={12} >
            <ProductCategoryButton
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.GridMenu} >
            <ProductCategory setActiveCategory={setActiveCategory} />
          </Grid>
          <Grid item xs>
            <ProductList activeCategory={activeCategory} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Products;
