import { SxProps } from "@mui/material"

export const titleStyle: SxProps = {
    fontSize: "1rem",
    fontWeight: "700",
    height: {
      xxs: "100%",
      xs: "100%",
      sm: "120px",
      md: "120px",
      lg: "120px",
      xl: "100px",
    },
    textAlign: "left",
  }
  
  export const mainBoxStyle: SxProps = {
    display: "flex",
    alignItems:'center',
    flexDirection: {
      xxs: "row",
      xs: "row",
      sm: "column",
      md: "column",
      lg: "column",
      xl: "column",
    },
    justifyContent: "space-around",
  }
  
  export const itemImageStyle: SxProps = {
    pr: "2%",
    width: {
      xxs: "40%",
      xs: "40%",
      sm: "60%",
      md: "80%",
      lg: "80%",
      xl: "80%",
    },
  }
  
  export const itemInfoBoxStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
  
  export const itemDescriptionBoxStyle: SxProps = {
    height: {
      xxs: "120px",
      xs: "120px",
      sm: "170px",
      md: "130px",
      lg: "170px",
      xl: "170px",
    },
    bgcolor: "#f5f2f2",
  }
  
  export const itemFooterBoxStyle: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flexDirection: {
      xxs: "column",
      xs: "column",
      sm: "row",
      md: "row",
      lg: "row",
      xl: "row",
    },
  }
  
  export const buyNowBtn: SxProps = {
    [`.MuiTypography-root`]: {
      fontSize: "0.7rem",
    },
    width:{
      xxs: "80%",
      xs: "80%",
      sm: "80%",
      md: "auto",
      lg: "auto",
      xl: "auto",
    },
  
  }
  
  export const mrpTextStyle: SxProps = { fontSize: "0.7rem" }
  
  