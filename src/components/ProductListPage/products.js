import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import CartModel from '../MiniCart/cartModel'

const Products = (props) => {
    const dispatch = useDispatch();
    const addtoCart = () => {
        dispatch({
            type: "ADDCART",
            payload: props.allProducts
        })
        
    }

    // useEffect(()=>{
    //   dispatch({
    //     type: "addToCart",
    //     payload: [{item:"Smabar"}]
    //   })
    // },[])
    return (

        <Grid container className="all-pro-bg" spacing={1}>

            <Grid item lg={12} xs={12} md={12} sm={12} className="mb-0 mt-0" >
                <h2 className="products-title">{props.allProducts.name}</h2>
            </Grid>

            <Grid item lg={12} xs={6} md={12} sm={12} className="mb-0">
                <img className="products-width" src={props.allProducts.imageURL} alt="products" className="imageUrl" />
            </Grid>


            <Grid item xs={6} lg={12} md={12} sm={12}>
                <p className="products-desc">{props.allProducts.description}</p>
            </Grid>



            <Grid item md={7} lg={7} xs={6} sm={7} className="mb-5 mt-0">
                <h2 className="products-subText">MRP RS </h2>
            </Grid>


            <Grid item md={5} lg={5} xs={1} sm={5}>
                <button className='btn btn-sm btn-danger buy-now' data-toggle="modal" data-target="#myModal"  onClick={addtoCart}>Buy Now @{props.allProducts.price}</button>
            </Grid>

        </Grid>
    )
}

export default Products;