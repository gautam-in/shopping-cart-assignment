import React from 'react'
import {  Grid } from '@material-ui/core'




export function FruitsAndVegetables(props){
    return(
    <Grid container className="catogory-list mt-4">
    <Grid item lg={2} xs={12} md={12}></Grid>
    <Grid item lg={4} xs={12} md={12}>
    <img src={props.fruit.imageUrl} alt="banners" className="imageUrl" />  
    </Grid>
    <Grid item lg={5} xs={12} md={12}>
    <p className="cat-name">{props.fruit.name}</p>
    <p className="cat-desc" >{props.fruit.description}</p>
    <p className="explore-fruit">{props.fruit.subText}</p>
    </Grid>
    <Grid item lg={1} xs={12} md={12}></Grid>
     </Grid>
    )
}