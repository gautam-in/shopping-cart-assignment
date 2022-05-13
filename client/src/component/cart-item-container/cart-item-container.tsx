
import { Box, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import {
  mainContainer,
  itemName,
  iconBox,
  iconBtn,
  qtyText,
  iconStyle,
  itemPriceStyle,
  totalPriceBoxStyle,
  totalPriceStyle
} from './cart-item.style'
import { ProductType } from "../../type";

export interface ItemProps{
  item: ProductType;
  increaseQTY:(id:string)=> void;
  decreaseQTY:(id:string)=> void;

}
const CartItem = ({item, increaseQTY, decreaseQTY}:ItemProps) => {
  const [quantity, setQuantity] = React.useState(item.qty);
  const [totalPrice, settotalPrice] = React.useState(item.price);

  const addQuantity = (id:any) => {
    setQuantity(quantity + 1);
   increaseQTY(id)
  };

  const decreaseQuantity = (id:any) => {
    setQuantity(quantity - 1);
   decreaseQTY(id)
  };

  React.useEffect(() => {
    settotalPrice(quantity * item.price);
    setQuantity(quantity)
  }, [quantity,item]);

  return (
    <Grid
      container
      sx={  mainContainer }
    >

      <Grid item xs={3} sm={3} md={3} lg={3}>
        <Box component={"img"} alt={item.name} src={item.imageURL} sx={{ width: "100%" }} />
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6}>
        <Typography
          sx={itemName}
        >
          {item.name}
        </Typography>
        <Box
          sx={iconBox}
        >
          <IconButton
            sx={iconBtn}
            aria-label="Decrease Quantity"
            onClick={()=>decreaseQuantity(item.id)}
          >
            <RemoveIcon sx={iconStyle} />
          </IconButton>
          <Typography
            sx={qtyText}
          >
            {quantity}
          </Typography>
          <IconButton
            sx={iconBtn}
            aria-label="Increase Quantity"
            onClick={()=>addQuantity(item.id)}
          >
            <AddIcon sx={iconStyle} />
          </IconButton>

          <Typography
            sx={itemPriceStyle}
          >
            <span>X</span>
            <span>Rs.{item.price}</span>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={3} sm={3} md={3} lg={3}>
        <Box sx={totalPriceBoxStyle}>
          <Typography
            sx={totalPriceStyle}
          >
            Rs.{totalPrice}
          </Typography>
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default CartItem;
