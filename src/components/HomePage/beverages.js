import React from 'react'
import {  Grid } from '@material-ui/core'




export function Beverages(props){
    return(
    <Grid container className="catogory-list mt-4">
    <Grid item lg={2} md={12}></Grid>
    <Grid item lg={4} md={12}>
    <img src={props.beverage.imageUrl} alt="banners" />  
    </Grid>
    <Grid item lg={4} md={12}>
    <p className="cat-name">{props.beverage.name}</p>
    <p className="cat-desc">{props.beverage.description}</p>
    <p className="explore-beverage">{props.beverage.subText}</p>
    </Grid>
    <Grid item lg={2} md={12}></Grid>
     </Grid>
    )
}