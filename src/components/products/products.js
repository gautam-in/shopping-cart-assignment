import { makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { addtocart } from "../../redux/cart/cartAction"
import SingleProduct from "./singleProduct"

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: "white"
    }

}))

function Products(props) {
 const classes = useStyles()
  return (
    <>
      {props.products.length ? (
        <div className={classes.mainContainer}>
          {props.products.map((element) => (
            <SingleProduct
              product={element}
              key={element.id}
              addtocart={() => props.addtoCart(element)}
            />
          ))}
        </div>
      ) : (
        <h1>No items available</h1>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtoCart: (element) => dispatch(addtocart(element)),
  };
};

export default connect(null, mapDispatchToProps)(Products);