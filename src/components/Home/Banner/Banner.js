import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Banner.css";

export default function Banner(img) {
  return (
    <Card className="center" sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img.img}
          sx={{ padding: "auto", objectFit: "contain" }}
        />
      </CardActionArea>
    </Card>
  );
}
