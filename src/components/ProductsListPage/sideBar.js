import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import Products from './products';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';





export default function SideBar() {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);


  useEffect(() => {
    axios
      .get("http://localhost:5001/products")
      .then((response) => {
        const products = response.data;
        //console.log(products)
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:5001/categories")
      .then((response) => {
        const categories = response.data;
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(()=>{
  //   dispatch({
  //     type: "addToCart",
  //     payload: [{item:"Smabar"}]
  //   })
  // },[])



  const filterByCategory = (item) => {
    setFilter(item)
    // let filterData = products.filter(i => i.category === item.id)
    // setProducts(filterData)
  }

  return (

    <Grid container spacing={3} >

      <Grid className="cat-bg" item lg={3} md={3} xs={12} sm={3}>
      {/* <select className="form-select" aria-label="Default select example"> */}
        {
          categories.map((item) => (
            
            <Button variant="contained" color="default" className="cat-button" onClick={() => filterByCategory(item)}>{item?.label ?? null}</Button>
           
          ))
        }
         {/* </select> */}
      </Grid>
      <Grid item lg={9} md={9} xs={12} sm={9}>
        <Grid container item lg={12} sm={12} md={12} xs={12}>
          {
            products.filter(item => filter ? item.category === filter.id : item.category === item.category).map((product, index) =>
              <Grid key={index} container lg={3} sm={6} md={6} xs={12}>
                <Products key={index} allProducts={product} />
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
