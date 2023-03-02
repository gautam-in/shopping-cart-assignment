import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Layout = ({ name, description, children }) => {
  return (
    <Container maxWidth="md" sx={{ minHeight: "85vh", mb: {xs: 8, md: 5, lg: 2} }}>
      <Paper variant="outlined" sx={{ p: 5 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: "1rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h4"
              my={2}
              sx={{ fontWeight: 600, letterSpacing: "1px" }}
            >
              {name}
            </Typography>
            <Typography variant="body1">
             
              {description}
            </Typography>
          </Box>
          {children}
        </Box>
      </Paper>
    </Container>
  );
};

export default Layout;
