import React, { useContext } from "react";
import { Paper, Button  } from '@material-ui/core';

import { ActiveContext } from "../../../../Library/context";
import baseHelper from "../../../../Library/helper";

const Item = props => {
  const { productItem } = props;
  const { name, imageURL, description, price } = productItem;
  const { setCartItems } = useContext(ActiveContext);
  const pushToCart = [];
  pushToCart.push({
    name,
    imageURL,
    price
  });
  const imagePath = baseHelper.getImagePath(imageURL);

  return (
    <Paper style={{padding: "4px", border: "1px solid #dbdbdb"}}>
      <span style={{fontSize: "0.9rem", fontWeight: "bold", marginBottom: "5px"}}>{name}</span>
      <br /><br />
      <div style={{textAlign: "center"}}>
      <img src={imagePath} alt={name} style={{width: "100%", maxWidth: "100px", height: "auto"}} />
      <br />
      <div style={{padding: "2px", backgroundColor: "#dbdbdb", fontSize: "0.7rem", borderRadius: "5px", textAlign: "left", marginBottom: "4px"}}>
        {description}
      </div>
      <Button variant="contained" color="secondary"
        onClick={() => setCartItems(prevCart => [ ...prevCart, ...pushToCart ])}
        style={{fontSize: "0.7rem"}}
      >
            {`Buy Now @ Rs.${price}`}
      </Button>
      </div>
    </Paper>
  )
}

export default Item;

