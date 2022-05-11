import { Box, Container, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CartItem from "../component/cart-item-container/cart-item-container";
import Button from "../component/Button/Button-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  mainBox,
  mobileFillBox,
  fillBox,
  carttextBox,
  cartText,
  totalItem,
  closeIcon,
  CartItemBox,
  container,
  cheaperText,
  footerStyle,
  totalText,
  checkOutBtn,
} from "./cart.style";
import { useAppSelector, useAppDispatch } from '../store/hook'
import { Dispatch } from 'redux'
import { addQty, removeQty } from '../store/action/action'
import React from "react";
const Cart = (props: any) => {
  const dispatch: Dispatch<any> = useAppDispatch()
  const { shoppingCart } = useAppSelector((state: any) => state.user)
const [cartItem, setCartItem]= React.useState(shoppingCart)
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const close = () => {
    $(".App").css("opacity", "1");
    if (Mobile) {
      $(".content").css("display", "none");
    }
    props.handleClose();
  };
  const increaseQTY = (id: any) => {
    dispatch(addQty(id))
  }
  const decreaseQTY = (id: any) => {
    dispatch(removeQty(id))
  }
  React.useEffect(()=>{
    setCartItem(shoppingCart)
  },[shoppingCart])
  const totalPriceofItem = shoppingCart.map((data: any) => data.price * data.qty).reduce((prev: any, curr: any) => prev + curr, 0);
  const totalQTYofItem = shoppingCart.map((data: any) => data.qty).reduce((prev: any, curr: any) => prev + curr, 0);
  return (
    <Box sx={mainBox}>
      {Mobile && <Box sx={mobileFillBox}></Box>}

      <Box sx={fillBox}>
        <Box sx={carttextBox}>
          <Typography sx={cartText}>My Cart</Typography>
          <Typography sx={totalItem}>({totalQTYofItem} Item)</Typography>
        </Box>

        <CloseIcon sx={closeIcon} onClick={close} />
      </Box>
      <Box sx={CartItemBox}>
        {cartItem.map((item: any) => <CartItem key={item.id} item={item} shoppingCart={shoppingCart} increaseQTY={increaseQTY} decreaseQTY={decreaseQTY} />)}
        <Container sx={container}>
          <Box component={"img"} src="/static/images/lowest-price.png" alt={"Lowest Price guarantee"}/>
          <Typography sx={cheaperText}>
            You won't find it cheaper anywhere
          </Typography>
        </Container>
      </Box>


      <Box sx={footerStyle}>
        <Button sx={checkOutBtn}>
          <Typography>Proceed to Checkout</Typography>
          <Typography sx={totalText}>
            Rs.{totalPriceofItem}
            <ArrowForwardIosIcon />
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default Cart;
