import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  cartItem: {
    height: "80px",
    display: "flex",
    padding: "0.3rem",
    backgroundColor: "white",
    marginBottom: "0.5rem"
  },
  cartImage: {
    width: "80px"
  },
  productDetails: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  itemcontainer: {
    display: "flex",
    alignItems: "center"
  },
  iconcontainer: {
    display: "flex",
    alignItems: "center",
    flex: "2",
    justifyContent: "space-between"
  },
  itemprice: {
    flex: 1,
    display: "flex",
    justifContent: "flex-end"
  }

}))
function Eachcartitem({ item, addtocart, removefromcart }) {
  const classes = useStyles()
  return (
    <div className={classes.cartItem}>
      <div>
        <img src={item.imageURL} alt={item.name} className={classes.cartImage} />
      </div>
      <div className={classes.productDetails}>
        <h5>{item.name}</h5>
        <div className={classes.itemcontainer}>
          <div className={classes.iconcontainer}>
            <RemoveCircleIcon
              style={{ color: "#d90166" }}
              onClick={() => removefromcart()}
            />
            {item.count}
            <AddCircleIcon
              style={{ color: "#d90166" }}
              onClick={() => addtocart()}
            />
            <CloseIcon />
            <span> Rs.{item.price}</span>
          </div>
          <div className="itemprice">Rs. {item.price * item.count}</div>
        </div>
      </div>
    </div>
  );
}
export default Eachcartitem;
