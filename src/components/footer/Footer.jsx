import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Copyright © 2011-2023 Sabka Bazaar Grocery Supplies Pvt Ltd"
          sx={{ maxWidth: "350px", color: grey[900] }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
