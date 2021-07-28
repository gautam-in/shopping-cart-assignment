import React, { useState, useEffect } from 'react';
import {Grid, Button } from '@material-ui/core';
// import { category } from '../../server/categories/categories';
//  import {AllProducts} from '../../server/products/AllProducts';
import Products from './products';
import { useSelector,useDispatch } from "react-redux";

export default function VerticalTabs() {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(globalState,"global state")

  useEffect(()=>{
    dispatch({
      type: "addToCart",
      payload: [{item:"Smabar"}]
    })
  },[])

  // const [products, setProducts] = useState(AllProducts);
  
  // const filterByCategory = (item)=>{
  //   let filterData = AllProducts.filter(i=>i.category===item.id)
  //   setProducts(filterData)
  // }

  return (

    <Grid container spacing={3}>
     
      <Grid className="cat-bg"  item lg={3} md={3} xs={12} sm={3}>
        {/* {
          category.map((item) => (
            <Button variant="contained" color="default" className="cat-button" onClick={()=>filterByCategory(item)}>{item?.label??null}</Button>
          ))
        } */}
      </Grid>
      <Grid item lg={9} md={9} xs={12} sm={9}>
        <Grid  item  lg={12} sm={12} md={12} xs={12}>
        {/* {
          products.map((product) =>
          <Grid item  lg={3} sm={6} md={6} xs={12}>
          <Products  allProducts={product} />
          </Grid>
          )
        } */}
          <Products  />
        </Grid>
      </Grid>
    </Grid>
  );
}
