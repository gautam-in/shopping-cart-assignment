import React from 'react'
import {  Grid } from '@material-ui/core'




export function BeautyAndHygiene(props){
    return(
    <Grid container className="catogory-list mt-4">
    <Grid item lg={1} md={12} xs={12}></Grid>
    <Grid item lg={4} md={12} xs={12}>
    <p className="cat-name">{props.beautyP.name}</p>
    <p className="cat-desc">{props.beautyP.description}</p>
    <p className="explore-beauty">{props.beautyP.subText}</p>
    </Grid>
    <Grid item lg={2} md={12} xs={12}></Grid>
    <Grid item lg={4} md={12} xs={12}>
    <img src={props.beautyP.imageUrl} alt="fruits-banners" />  
    </Grid>
    
     </Grid>
    )
}