import { SxProps } from "@mui/material";

export const FooterBox: SxProps = {
    bgcolor: "lightgray",
  };
  
  export const FooterText: SxProps = {
    textAlign: "left",
    pl: "10%",
    pt: "1%",
    pb: "1%",
  };
  
  export const headerStyle = {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  };
  
  export const BoxContainer: SxProps = {
    display: "flex",
    pt: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: {
      xxs: "100%",
      xs: "100%",
      sm: "70%",
      md: "70%",
      lg: "70%",
      xl: "70%",
    },
  };
  export const LogoBox: SxProps = { width: "65%" };
  
  export const LinkContainer: SxProps = { display: "flex", flexDirection: "row" };
  
  export const LinkBox: SxProps = { display: "flex", ml: "10%", pt: "2%" };
  
  export const LinkStyle = { textDecoration: "none" };
  
  export const LinkText: SxProps = { p: 2, color: "black" };
  
  export const CartButton: SxProps = {
    bgcolor: "lightgrey",
    "&:hover": {
      background: "lightgrey",
    },
  };
  
  export const CartIcon: SxProps = { color: "#ba2955" };
  
  export const CartItemText: SxProps = { color: "black", fontWeight: "600" };
  
  export const UserBox: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  };
  export const UserRegisterBox: SxProps = {
    display: "flex",
    justifyContent: "space-between",
  };
  
  export const UserAccountText: SxProps = { pr: 1, color: "black" };
  
  export const PopperStyle: SxProps = {
    width: {
      xxs: "100%",
      xs: "100%",
      sm: "400px",
      md: "400px",
      lg: "400px",
      xl: "400px",
    },
    zIndex: "1",
  };
  
  export const CartBox: SxProps = { border: 1, bgcolor: "background.paper" };
  