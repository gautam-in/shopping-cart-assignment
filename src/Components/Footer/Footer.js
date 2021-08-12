import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import Grey from '@material-ui/core/colors/grey';
const color = Grey[600];
export default function Footer() {
    return (
        <AppBar position="static" style={{backgroundColor:color}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1">
              Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}