import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BootstrapButton as Button } from "../../BootstrapButton";
import { GlobalContext } from "../../../context/GlobalContext";
import { Hidden, Link } from "@mui/material";

export default function MediaCard({
  name,
  imageUrl,
  description,
  price,
  stock,
  text,
  id,
}) {
  const {
    dispatch,
    cartItems: { products },
  } = React.useContext(GlobalContext);
  const [noWrap, setNoWrap] = React.useState(true);

  function addItemToCart() {
    if (!products[id]) {
      dispatch({
        type: "ADD_ITEM",
        product: {
          [id]: {
            id,
            imageUrl,
            name,
            price,
            stock,
            quantity: 1,
          },
        },
      });
    } else {
      dispatch({
        type: "EDIT_ITEM",
        id: id,
      });
    }
  }

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        flexWrapp: "wrap",
        maxHeight: "auto",
      }}
    >
      <Typography
        gutterBottom
        variant="subtitle1"
        component="div"
        sx={{ minHeight: "60px" }}
      >
        {name}
      </Typography>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={name}
        sx={{ padding: "auto", objectFit: "contain", height: "180px" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap={noWrap}
          sx={{ fontSize: "0.775rem", textOverflow: "clip" }}
          textAlign="start"
        >
          {description}
        </Typography>
        <Typography variant="body2" textAlign={"start"}>
          <Link
            onClick={() => setNoWrap(!noWrap)}
            sx={{ textDecoration: "none", color: "#35393c" }}
          >
            {noWrap ? "...more" : "less..."}
          </Link>
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="body1" component="div">
          {`MRP Rs ${price}`}
        </Typography>
        <Button onClick={addItemToCart} size="small">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
