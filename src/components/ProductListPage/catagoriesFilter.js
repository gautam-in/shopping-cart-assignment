import { Grid } from '@material-ui/core';
import React from 'react';
import {AllProducts} from '../../server/products/AllProducts';
import  FruitsList from './fruits';




function FruitFilter(props){

console.log("hi",props)

const fruitsFiltered = AllProducts.filter((proF)=> proF.category === props.id)
    console.log(fruitsFiltered)
    return(       
        <Grid>
         <FruitsList  fruitlist={fruitsFiltered} />
        </Grid>
    )
}
export default FruitFilter;