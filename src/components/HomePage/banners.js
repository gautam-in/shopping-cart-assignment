import React from 'react';
import { Grid } from '@material-ui/core'
import './style.css';
// import abc from '../../static/images/offers/offer1.jpg'

export default function Banner(props){
    return(
        
        <Grid item xs={10}  lg={12} className="banner-title">
        <img  className="banner-width" src={props.list.bannerImageUrl} alt="banners" />
        <p>{props.list.bannerImageAlt}</p>
        <p>{props.list.isActive}</p>
        <p>{props.list.order}</p>
       
        </Grid>
    
    )
}