import { SxProps } from "@mui/material";

export const mainBox: SxProps = {
    width: "100%",
    height: {
      xxs: "90vh",
      xs: "90vh",
      sm: "80vh",
      md: "80vh",
      lg: "80vh",
      xl: "80vh",
    },
    bgcolor: "lightgrey",
    overflow: 'scroll',
  };
  
  export const fillBox: SxProps = {
    bgcolor: {
      xxs: "white",
      xs: "white",
      sm: "black",
      md: "black",
      lg: "black",
      xl: "black",
    },
    display: "flex",
  
    flexDirection: "row",
    justifyContent: "space-between",
    height: "40px",
    zIndex: "1",
    position: 'fixed',
    width:' 100%',
   
  
    alignItems: "center",
  };
  
  export const cartText: SxProps = {
    color: {
      xxs: "black",
      xs: "black",
      sm: "white",
      md: "white",
      lg: "white",
      xl: "white",
    },
    pl: 2,
    fontWeight: "bolder",
  };
  
  export const totalItem: SxProps = { fontSize: ".9rem", pl: "3px",color: {
    xxs: "black",
    xs: "black",
    sm: "white",
    md: "white",
    lg: "white",
    xl: "white",
  },};
  
  export const mobileFillBox: SxProps = { height: "25px" };
  
  export const carttextBox: SxProps = { display: "flex", alignItems: "flex-end" };
  
  export const closeIcon: SxProps = { color: "white", pr: 2 };
  
  export const CartItemBox: SxProps = { bgcolor: "#f5f2f2",mt:7 };
  
  export const container: SxProps = {
    bgcolor: "white",
    mb: 6,
    mt:2,
    width: "98%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  
  export const cheaperText: SxProps = { fontSize: "0.8rem" };
  
  export const footerStyle: SxProps = {
    bottom: "0",
    position: "fixed",
    width: "99.3%",
  };
  
  export const checkOutBtn: SxProps = {
    width: "100%",
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
  };
  
  export const totalText: SxProps = {
    width: "20%",
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
  };
  