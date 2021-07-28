import React from 'react'
import {  Grid } from '@material-ui/core'




export function Bakery(props){
    return(
    <Grid container className="catogory-list mt-4">
    <Grid item lg={1} md={12} xs={12}></Grid>
    <Grid item lg={5} md={12} xs={12}>
    <p className="cat-name">{props.bake.name}</p>
    <p className="cat-desc">{props.bake.description}</p>
    <p className="explore-bakery">{props.bake.subText}</p>
    </Grid>
    <Grid item lg={3} md={12} xs={12}></Grid>
    <Grid item lg={3} md={12} xs={12}>
    <img src={props.bake.imageUrl} alt="fruits-banners" className="imageUrl" />  
    </Grid>
    
     </Grid>
    )
}