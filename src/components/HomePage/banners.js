import React from 'react';
import { Grid } from '@material-ui/core'
import './style.css';


export default function Banner(props){
    return(
        
        <Grid item xs={10}  lg={12} className="banner-title">
        <img  className="banner-width" src={props.list.bannerImageUrl} alt="banners" />
        </Grid>
    )
}