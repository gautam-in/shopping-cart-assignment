import React from 'react';
import SideBar from './sideBar';
import { Grid } from '@material-ui/core/';

export default function ProductsListPage(){
    return <div>
        <Grid lg={12}>
        <SideBar />
        </Grid>
    </div>
}