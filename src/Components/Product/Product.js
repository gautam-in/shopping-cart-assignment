import React, { useState } from "react";
import { makeStyles, Snackbar } from "@material-ui/core";
import "./Product.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Eachproduct(props) {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const handleClose = () => setopen(false);
  function ProdImg(){
    return(
      <div className="container" style={{backgroundImage:`url(${props.product.imageURL})`}}/>
    )
  }
  return (
    <div className="product">
      <div className="title">
        <strong>{props.product.name}</strong>
      </div>
      <ProdImg/>
      <div className="description">{props.product.description}</div>
      <div className="productpricing">
        <span>MRP Rs.{props.product.price}</span>
        <button
          onClick={() => {
            setopen(true);
            props.addtocart();
          }}
        >
          Buy Now
        </button>
      </div>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <div className="popup">
            <h1>Product added to cart</h1>
          </div>
        </Snackbar>
      </div>
    </div>
  );
}
