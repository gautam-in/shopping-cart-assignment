import { Box, Button, Paper, Typography } from "@mui/material";
import Popper from "@mui/material/Popper";
import React, { Fragment, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Cart from "./cart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import $ from "jquery";

import {
  FooterBox,
  FooterText,
  headerStyle,
  BoxContainer,
  LogoBox,
  LinkContainer,
  LinkBox,
  LinkStyle,
  LinkText,
  CartButton,
  CartIcon,
  CartItemText,
  UserBox,
  UserRegisterBox,
  UserAccountText,
  PopperStyle,
  CartBox,
} from "./header.style";
import { useAppSelector, useAppDispatch } from '../store/hook'
import { Dispatch } from 'redux'
import { selectCategory, logout } from '../store/action/action'
import { ProductType, StoreStateProps } from "../type";
const Header = (props: any) => {
  const dispatch: Dispatch<any> = useAppDispatch()
  const { shoppingCart, loggedIn } = useAppSelector((state: StoreStateProps) => state.user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const totalQTYofItem = (shoppingCart) ? shoppingCart.map((data: ProductType) => data.qty).reduce((prev: any, curr: any) => prev + curr, 0): 0;

  const handleClick = (event: any) => {

    setAnchorEl(anchorEl ? null : event.currentTarget);
    if (!Mobile) {
      if (anchorEl) {
        $(".App").css("opacity", "1");
      } else {
        $(".App").css("opacity", "0.33");
      }
    } else {
      if (anchorEl) {
        $(".content").css("display", "block");
      } else {
        $(".content").css("display", "none");
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    $(".App").css("opacity", "1");
    $(".content").css("display", "block");

    handleClose();
  }, [Mobile]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Fragment>
      
      <div className="fade">
        <Paper elevation={2}>
          <header style={headerStyle}>
            <Box sx={BoxContainer}>

              <Box sx={LinkContainer}>
                <Link to="/">
                  <Box
                    component={"img"}
                    src={"/images/logo.png"}
                    alt="Sabka Bazzar Logo"
                    sx={LogoBox}
                  />
                </Link>
                {!Mobile && (
                  <Box sx={LinkBox}>
                    <Link to="/" style={LinkStyle}>
                      <Typography sx={LinkText}>Home</Typography>
                    </Link>
                    <Link to="/products" style={LinkStyle} onClick={() => dispatch(selectCategory(0))}>
                      <Typography sx={LinkText}>Product</Typography>
                    </Link>
                  </Box>
                )}
              </Box>

              <Box sx={UserBox}>
                {!Mobile && (
                   <Box sx={UserRegisterBox}>
                   {!loggedIn &&<> <Link to="/signin" style={LinkStyle}>
                      <Typography sx={UserAccountText}>SingIn</Typography>
                    </Link>
                    <Link to="/register" style={LinkStyle}>
                      <Typography sx={UserAccountText}>Register</Typography>
                    </Link> </>}
                    {loggedIn && <Link style={LinkStyle} to="/" onClick={() => dispatch(logout())}>
                    LogOut</Link>}
                  </Box>
                  
                )}
                <>
                  {" "}
                  <Button
                    onClick={handleClick}
                    variant="contained"
                    sx={CartButton}
                  >
                    <ShoppingCartIcon sx={CartIcon} />
                    <Typography sx={CartItemText}>{totalQTYofItem} Item</Typography>
                  </Button>
                  <div className="fullscreen-container">
                    <Popper
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      placement="bottom-end"
                      sx={PopperStyle}
                    >
                      <Box sx={CartBox}>
                        <Cart handleClose={handleClose} />
                      </Box>
                    </Popper>
                  </div>{" "}
                </>
              </Box>

            </Box>
          </header>
        </Paper>
      </div>
      {props.children}
      <Footer />

    </Fragment>
  );
};
export default Header;

const Footer = () => {
  return (
    <Box sx={FooterBox}>
      <Typography sx={FooterText}>
        Copyright &copy; 2011-2018 Sabka Bazzar Grocery Supplies Pvt Ltd
      </Typography>
    </Box>
  );
};
