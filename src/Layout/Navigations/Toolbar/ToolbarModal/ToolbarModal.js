import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import { Modal } from "../../../../Library/components";
import { ActiveContext } from "../../../../Library/context";

const ToolbarModal = props => {
  const { isModalOpen, setModal } = props;
  const { cartItems, setCartItems } = useContext(ActiveContext);

  let sumOfAllPrices = 0;
  const cartItemCard = cartItems.map((cartItem, idx) => {
    sumOfAllPrices += cartItem.price;
    return (
      <Grid container spacing={4} key={`${cartItem.name}${idx}`}>
        <Grid  item xs={9} >
          {cartItem.name}
        </Grid>
        <Grid  item xs={3}>
          {cartItem.price}
        </Grid>
      </Grid>
    );
  });

  return (
    <Modal isModalOpen={isModalOpen} setModal={setModal}>
      <h4 id="simple-modal-title">My Cart({cartItems.length})</h4>
      <div style={{flexGrow: "1"}}>
        {cartItemCard}
        <Grid container spacing={4}>
          <Grid  item xs={9} >
            Total
          </Grid>
          <Grid  item xs={3}>
            {sumOfAllPrices}
          </Grid>
        </Grid>
      </div>
      <div style={{textAlign: "center", marginTop: "120px"}}>
        <Button variant="contained" color="secondary"
          onClick={() => alert(`At Checkout pay Rs.${sumOfAllPrices}`)}
        >
          {`Proceed to Checkout RS.${sumOfAllPrices.toFixed(2)}`}
        </Button>
      </div>
    </Modal>
  );
};

export default ToolbarModal;
