import React from "react";
import Grid from "@mui/material/Grid";

import "./Footer.css";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Grid container>
        <Grid item>
          <Typography
            aria-label="Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd"
            sx={{ textAlign: "center" }}
          >
            Copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
