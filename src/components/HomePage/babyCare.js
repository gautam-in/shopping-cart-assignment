import React from 'react'
import {  Grid } from '@material-ui/core'




export function BabyCare(props){
    return(
    <Grid container className="catogory-list mt-4">
    <Grid item lg={2} md={12} xs={12}></Grid>
    <Grid item lg={4} md={12} xs={12}>
    <img src={props.babyC.imageUrl} alt="banners" />  
    </Grid>
    <Grid item lg={5} md={12} xs={12}>
    <p className="cat-name">{props.babyC.name}</p>
    <p className="cat-desc">{props.babyC.description}</p>
    <p className="explore-baby">{props.babyC.subText}</p>
    </Grid>
    <Grid item lg={1} md={12} xs={12}></Grid>
     </Grid>
    )
}