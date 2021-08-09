import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonWithText } from "../common/button";




const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  mainContainer: {
      width: "200px",
      borderBottom: "1px solid #00000029",
      padding: "0.5rem"
  },
  title: {
      height: "40px",
      overflow: "hidden"
  },
  btn: {
    padding: "0.4rem",
    width: "90px",
    background: "#da2020e3",
    border: "none",
    color: "white"

  },
  price: {
    padding: "0.5rem 0rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"

  },
  description: {
    fontSize: "small",
    background: "#80808029",
    padding: "0.5rem",
    height: "80px",
    overflow:"hidden",

  }




}));
function SingleProduct(props) {
  const classes = useStyles();

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
    <div className={classes.mainContainer}>
      <div className={classes.title}>
        <strong>{props.product.name}</strong>
      </div>
      <Container></Container>
      <div className={classes.description}>{props.product.description}</div>
      <div className={classes.price}>
        <span>MRP Rs.{props.product.price}</span>
        <ButtonWithText 
        dispText="Buy Now"
        color="#FFFFFF"
        backgroundColor="#d90166"
        borderColor="#d90166"
        borderRadius="1px"
        height= "30px"
        fontSize="15px"
        onClick={() => {
          props.addtocart();
        }}

        
        />

      </div>

    </div>
  );
}

export default SingleProduct;
