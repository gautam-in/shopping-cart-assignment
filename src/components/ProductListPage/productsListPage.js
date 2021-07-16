import React from 'react';
import SideBar from './sideBar';
import { Grid } from '@material-ui/core/';


export default function ProductsListPage(){
    return <div>
        <Grid lg={6}>
        <SideBar />
        </Grid>
        <Grid lg={6}>
        Hello
        </Grid>
    </div>
}