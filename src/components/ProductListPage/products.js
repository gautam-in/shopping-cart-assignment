import React , {useState, useEffect }from 'react';
import { Grid } from '@material-ui/core'
import './style.css';
import axios from 'axios';

 const Products = (props) => {


const [categories, setCategories] = useState([]);
const [products, setProducts] = useState([]);


useEffect(() => {
axios
 .get("http://localhost:5000/categories")
 .then((response) => {
setCategories(response?.data);
 })
 .catch((error) => {
console.log(error);
 });
axios
 .get("http://localhost:5000/products")
 .then((response) => {
setProducts(response?.data);
 })
 .catch((error) => {
console.log(error);
 });
 }, []);

 console.log(categories);
    return(

        <Grid container  className="all-pro-bg mb-4" spacing={1}>
                           {/* <Grid item lg={12} xs={12} md={12} sm={12}  className="mb-0 mt-0" >
                           <h2 className="products-title">{props.allProducts.name}</h2>
                           </Grid>

                           <Grid item lg={12} xs={6} md={12} sm={12} className="mb-0">
                            <img className="products-width" src={props.allProducts.imageURL} alt="products" className="imageUrl" />
                            </Grid>
                             
                           
                            <Grid item xs={6} lg={12} md={12} sm={12}>
                            <p className="products-desc">{props.allProducts.description}</p>
                            </Grid>
                          
                           
                            
                            <Grid item md={7} lg={7} xs={6} sm={7} className="mb-5 mt-0">
                            {/* <h2 className="products-subText">MRP RS </h2> */}
                            {/* </Grid>

                            <Grid item md={5} lg={5}  xs={1} sm={5}>
                           <button className='btn btn-sm btn-danger buy-now'>Buy Now @{ props.allProducts.price}</button>
                            </Grid>         */}
                           
                    </Grid>
      )
}

export default Products;