import React, { useState } from "react";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import "./Eachproduct.scss";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function Eachproduct(props) {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  const Container = styled.div`
    background-image: url(${props.product.imageURL});
    background-repeat: no-repeat;
    height: 200px;
    background-size: cover;
    @media (max-width: 600px) {
      height: 300px;
    }
  `;

  return (
    <div className="Eachproduct">
      <div className="eachtitle">
        <strong>{props.product.name}</strong>
      </div>
      <Container></Container>
      <div className="description">{props.product.description}</div>
      <div className="Eachproductpricing">
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
          <div
            style={{
              background: "green",
              padding: "0.2rem 0.5rem",
              color: "white",
            }}
          >
            <h1>Product added to cart</h1>
          </div>
        </Snackbar>
      </div>
    </div>
  );
}

export default Eachproduct;
