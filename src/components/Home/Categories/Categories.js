import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./Categories.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BootstrapButton } from "../../BootstrapButton";
import { useNavigate } from "react-router-dom";

export default function Categories(props) {
  const navigate = useNavigate();
  return (
    <Paper>
      <Card sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          {Number.parseInt(props.order) % 2 > 0 && (
            <Grid item xs={5.5} sm={4} md={4} className="image">
              {/* <CardMedia
                component="img"
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  padding: "auto",
                  marginLeft: 1,
                  objectFit: "contain",
                }}
                image={props.img}
              /> */}
              <CardMedia
                component="img"
                height="150"
                image={props.img}
                sx={{
                  padding: "auto",
                  objectFit: "contain",
                  marginTop: 3,
                  marginBottom: 2,
                  marginLeft: 1,
                }}
              />
            </Grid>
          )}
          <Grid
            item
            xs={6}
            md={8}
            sm={8}
            sx={{ marginTop: 3, marginBottom: 3 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {props.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  {props.description}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                marginLeft={"auto"}
                marginRight={"auto"}
              >
                <BootstrapButton
                  disableRipple
                  onClick={() => navigate(`/products?id=${props.id}`)}
                  autoCapitalize={false}
                  variant="contained"
                >{`Explore ${props.name
                  .split(" ")
                  .join("-")}`}</BootstrapButton>
              </Box>
            </Box>
          </Grid>
          {Number.parseInt(props.order) % 2 === 0 && (
            <Grid item xs={5.5} sm={4} md={4} className="image">
              <CardMedia
                component="img"
                height="150"
                image={props.img}
                sx={{
                  padding: "auto",
                  objectFit: "contain",
                  marginTop: 3,
                  marginBottom: 2,
                  marginLeft: 1,
                }}
              />
            </Grid>
          )}
        </Grid>
      </Card>
    </Paper>
  );
}
