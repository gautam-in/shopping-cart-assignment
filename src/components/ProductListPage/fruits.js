import { Grid } from '@material-ui/core';
import React from 'react';
import './style.css';


export default function FruitsList(props){
    return(
        <Grid>
            {
            props.fruitlist.map(fruitlist => (
          <Grid container className="catogory-list mt-4">
        <img src={fruitlist.imageUrl} alt="catogory" className="imageUrl" />  
      
        <Grid item lg={5} xs={12} md={12}>
        <p className="cat-name">{fruitlist.name}</p>
        <p className="cat-desc" >{fruitlist.description}</p>
        </Grid>
        <Grid item lg={5} xs={12} md={12}>
       <button className="btn btn-danger">Buy now @</button>
       </Grid>
        <Grid item lg={1} xs={12} md={12}></Grid>
         </Grid>
        ))
            }

        </Grid>
        
    )
}